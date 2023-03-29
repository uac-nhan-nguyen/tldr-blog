<script lang="ts">
  import Button from "../components/Button.svelte";
  import Modal from "../components/Modal.svelte";
  import Notepad from "../components/Notepad.svelte";
  import TimerButton from "../components/TimerButton.svelte";
  import {
    getLocalStorageJson,
    setLocalStorageJson,
  } from "../utils/LocalStorage";
  import { IconLock, IconLockOpen } from "@tabler/icons-svelte";
    import MarkdownDisplay from "../components/MarkdownDisplay.svelte";

  let showModal = false;
  let newGroupName = "";

  const storageId = "NotepadPage";
  const _data = getLocalStorageJson<{
    groups2: {
      id: number;
      name: string;
      locked?: boolean;
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
      showModal = false;
    }
  };

  $: {
    setLocalStorageJson(storageId, _data);
  }

  const className = "border-solid border-2 p-1";
  const editableClass = "border-dashed";
</script>

<div class="grid justify-items-start gap-4 pb-4">
  <MarkdownDisplay content='# Notepad' />
  <TimerButton id="notepad" />

  {#each _data.groups2 as group}
    <div>
      <div class="flex">
        <div class="text-lg">{group.name}</div>
        {#if group.locked}
          <button
            class="cursor-pointer border-none bg-white "
            on:click={() => (group.locked = false)}
          >
            <IconLock size={16}/>
          </button>
        {:else}
          <button
            class="cursor-pointer border-none bg-white "
            on:click={() => (group.locked = true)}
          >
            <IconLockOpen size={16} />
          </button>
        {/if}
      </div>
      <Notepad id={group.id.toString()} lock={group.locked} />
    </div>
  {/each}

  <button
    class="px-4 py-2 border-none hover:bg-slate-200 bg-slate-100 cursor-pointer"
    on:click={() => (showModal = true)}>Add new group ...</button
  >

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
