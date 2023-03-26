<script lang="ts">
  import Button from "../components/Button.svelte";
  import Modal from "../components/Modal.svelte";
  import Notepad from "../components/Notepad.svelte";
  import RichTextCube from "../components/RichTextCube.svelte";
  import TimerButton from "../components/TimerButton.svelte";
  import {
    getLocalStorageJson,
    setLocalStorageJson,
  } from "../utils/LocalStorage";

  let showModal = false;
  let newGroupName = "";

  const storageId = "NotepadPage";
  const _data = getLocalStorageJson<{
    groups2: {
      id: number;
      name: string;
    }[];
  }>(storageId, {
    groups2: [],
  });

  const createGroup = (name: string) => {
    if (name) {
      _data.groups2 = [
        ..._data.groups2,
        {
          id: Date.now(),
          name,
        },
      ];
      setLocalStorageJson(storageId, _data);
      showModal = false;
    }
  };

  const contents: {
    content: string;
    editable?: boolean;
    moreClassName?: string;
  }[] = [
    ...["Add dot grid", "Delete group", "Drag to order"].map((i) => {
      return {
        content: `<b>TODO:</b> ${i}`,
        moreClassName: "font-mono text-sm leading-4",
      };
    }),
    ...[
      "Add button to add note",
      "Store notes in local storage",
      "Delete note",
    ].map((i) => {
      return {
        content: `<b>Done</b> ${i}`,
        moreClassName: "font-mono text-sm leading-4 opacity-30",
      };
    }),
  ];

  const className = "border-solid border-1 p-1";
  const editableClass = "border-dashed";
</script>

<div class="grid justify-items-start gap-4">
  <TimerButton id="notepad" />
  <div class="flex items-start gap-2 flex-wrap">
    {#each contents as item}
      <RichTextCube
        className="{className} {item.editable
          ? editableClass
          : ''} {item.moreClassName ?? ''}"
        editable={item.editable}
        content={item.content}
        stepWidth={4}
      />
    {/each}
  </div>

  {#each _data.groups2 as group}
    <div>
      <div>
        <div class="text-lg">{group.name}</div>
      </div>
      <Notepad id={group.id.toString()} />
    </div>
  {/each}

  <button class="px-4 py-2 border-none hover:bg-slate-200 bg-slate-100 cursor-pointer" on:click={() => (showModal = true)}>Add new group ...</button>

  <Modal bind:showModal className="border-0">
    <div class="grid gap-2">
      <h3 class="m-0">Add new group</h3>
      <div>
        <label for="name">Group name</label>
        <input
          id="name"
          bind:value={newGroupName}
          on:keypress={(e) => {
            if (e.key === "Enter") {
              createGroup(newGroupName);
            }
          }}
        />
      </div>
      <div>
        <Button on:click={() => (showModal = false)} type="secondary"
          >Cancel</Button
        >
        <Button on:click={() => createGroup(newGroupName)}>Create</Button>
      </div>
    </div>
  </Modal>
</div>

<style>
  h1 {
    margin: 0;
    font-size: 28px;
  }
</style>
