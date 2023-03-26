<script lang="ts">
  import RichTextCube from "../components/RichTextCube.svelte";

  export let id: string;

  type NotepadData = {
    notes: {
      content: string;
      focus?: boolean;
    }[];
  };
  const initData: NotepadData = {
    notes: [],
  };

  const storageId = `notepad-${id}`;
  let _data: NotepadData;
  let deleteDragging: boolean = false;
  let dragging: boolean = false;

  try {
    _data = JSON.parse(localStorage.getItem(storageId));
    if (!_data) {
      _data = initData;
    }
  } catch (e) {
    console.error(e);
    _data = initData;
  }

  const addNote = () => {
    _data.notes = [
      ..._data.notes,
      {
        content: `Note ${_data.notes.length + 1}...`,
      },
    ];
  };

  $: {
    localStorage.setItem(storageId, JSON.stringify(_data));
  }

  // Handler drag drop
  function dragStart(event, item, itemIndex) {}

  function handleDrop(action: "delete" | "insert", event) {
    dragging = false
    try {
      const eventData = JSON.parse(event.dataTransfer.getData("data"));
      const { itemIndex } = eventData;
      if (action === "delete") {
        _data.notes.splice(itemIndex, 1);
        _data.notes = _data.notes;
      }
      console.log(eventData);
    } catch (e) {
      console.error("Invalid data", event.dataTransfer.getData("data"));
    }
  }
</script>

<div class="grid gap-2 justify-items-start">
  <div class="flex flex-wrap items-start gap-2">
    {#each _data.notes as note, itemIndex}
      <div
        class="border-solid border-1 bg-white {note.focus
          ? 'border-dashed'
          : ''}"
        on:drop={(e) => handleDrop("insert", e)}
      >
        <div
          class="bg-slate-200 h-[10px] cursor-grab"
          draggable="true"
          on:dragstart={(e) => {
            const data = { itemIndex };
            e.dataTransfer.setData("data", JSON.stringify(data));
            e.dataTransfer.setData("text/html", note.content);
            dragging = true;
          }}
          on:dragend={(e) => {
            dragging = false;
          }}
        />
        <RichTextCube
          className="p-1"
          on:focus={(e) => (note.focus = e.detail)}
          editable={true}
          bind:content={note.content}
          stepWidth={4}
        />
      </div>
    {/each}

    <button
      class="border-dashed border-1 border-red-600 bg-white cursor-pointer hover:bg-red-100 w-[49px] h-[49px]"
      on:click={addNote}>New note</button
    >
    <div
      class="border-dashed border-1 border-red-600 bg-white cursor-pointer hover:bg-red-100 
      min-h-[50px]
      max-w-[60px]
grid items-center p-4
      duration-200
      {dragging ? deleteDragging ? 'opacity-100' : 'opacity-70' : 'opacity-0'}
      {deleteDragging ? 'font-[600] border-1' : ''}
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
  </div>
</div>
