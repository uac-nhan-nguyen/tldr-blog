<script lang="ts">
  import RichTextCube from "../components/RichTextCube.svelte";
  import { generateId } from "../utils/common";
  import { getLocalStorage } from "../utils/LocalStorage";

  export let id: string;
  export let lock: boolean = false;

  type Note = {
    id: string;
    content: string;
    focus?: boolean;
  };
  type NotepadData = {
    notes: Note[];
  };
  const storageId = `notepad-${id}`;
  let _data: NotepadData = getLocalStorage(
    storageId,
    {
      notes: [],
    },
    (e) => {
      if (!Array.isArray(e.notes)){
        e.notes = []
      }
      e.notes = e.notes.map((i) => {
        if (!i.id) i.id = generateId();
        return i;
      });

      return e;
    }
  );

  let deleteDragging: boolean = false;
  let droppingOnNote: number = -1;
  let dragging: boolean = false;

  const addNote = () => {
    if (!lock) {
      _data.notes = [
        ..._data.notes,
        {
          id: generateId(),
          content: `Note ${_data.notes.length + 1}`,
        },
      ];
    }
  };

  $: {
    localStorage.setItem(storageId, JSON.stringify(_data));
  }

  // Handler drag drop
  function handleDrop(
    action: "delete" | "insert",
    event,
    props?: {
      targetIndex?: number;
      targetNote?: Note;
    }
  ) {
    dragging = false;
    const { targetIndex, targetNote } = props ?? {};
    try {
      const eventData = JSON.parse(event.dataTransfer.getData("data"));
      const { itemIndex } = eventData;
      if (action === "delete") {
        _data.notes.splice(itemIndex, 1);
        _data.notes = _data.notes;
      } else if (action == "insert" && targetIndex != null) {
        const moved = _data.notes.splice(itemIndex, 1);
        _data.notes.splice(targetIndex, 0, ...moved);
        _data.notes = _data.notes;
      }
    } catch (e) {
      console.error("Invalid data", event.dataTransfer.getData("data"));
    }
  }
</script>

<div class="grid gap-2 justify-items-start">
  <div class="flex flex-wrap items-start gap-2">
    {#each _data.notes as note, itemIndex (note.id)}
      <div
        class="border-solid border-2 bg-white 
        {note.focus ? 'border-dashed' : ''}"
        on:dragend={(e) => {
          dragging = false;
        }}
        on:dragenter={(e) => {
          // need this to make valid dropzone
          e.preventDefault();
          droppingOnNote = itemIndex;
        }}
        on:dragleave={(e) => {
          droppingOnNote = -1;
        }}
        on:dragover={(e) => {
          // need this to make valid dropzone
          e.preventDefault();
        }}
        on:drop={(e) => handleDrop("insert", e, { targetIndex: itemIndex })}
      >
        <div
          class="bg-slate-100 h-[8px] cursor-grab"
          draggable="true"
          on:dragstart={(e) => {
            const data = { itemIndex };
            e.dataTransfer.setData("data", JSON.stringify(data));
            e.dataTransfer.setData("text/html", note.content);
            dragging = true;
          }}
        />
        <RichTextCube
          className="p-1 "
          on:focus={(e) => (note.focus = e.detail)}
          editable={!lock}
          bind:content={note.content}
          stepWidth={4}
          on:shortcut={(e) => {
            switch (e.detail) {
              case "cmd+enter":
                addNote();
                break;
            }
          }}
        />
      </div>
    {/each}

    {#if !lock}
      <button
        class="border-dashed border-1 border-red-600 bg-white cursor-pointer hover:bg-red-100 w-[49px] h-[49px]"
        on:click={addNote}>New note</button
      >
    {/if}
    {#if dragging}
      <div
        class="border-dashed border-1 border-red-600 bg-white cursor-pointer hover:bg-red-100 
      min-h-[50px]
      max-w-[60px]
grid items-center p-4
      duration-200
      {dragging ? (deleteDragging ? 'opacity-100' : 'opacity-70') : 'opacity-0'}
      {deleteDragging ? 'font-[600] border-2' : ''}
      "
        on:dragenter={(e) => {
          // need this to make valid dropzone
          e.preventDefault();
          deleteDragging = true;
        }}
        on:dragleave={(e) => {
          deleteDragging = false;
        }}
        on:dragover={(e) => {
          // need this to make valid dropzone
          e.preventDefault();
        }}
        on:drop={(e) => handleDrop("delete", e)}
      >
        Drop here to delete
      </div>
    {/if}
  </div>
</div>
