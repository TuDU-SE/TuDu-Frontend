<script>
  import TuDuComponent from "./TuDu_Component.svelte";
  import {
    useForm,
    validators,
    HintGroup,
    Hint,
    email,
    required,
  } from "svelte-use-form";

  let form = useForm();

  let new_tudu;

  let tudus = [
    {
      name: "Test#1",
      editable: false,
      due_date: new Date(Date.now()),
      finished: false,
    },
    {
      name: "Test#2",
      editable: true,
      due_date: new Date(Date.now()),
      finished: false,
    },
  ];

  let show_new_tudu_form = false;
  function btn_switch() {
    show_new_tudu_form = !show_new_tudu_form;
  }

  function createNewTuDu() {
    tudus = [
      ...tudus,
      {
        name: new_tudu,
        editable: true,
        due_date: new Date(Date.now()),
        finished: false,
      },
    ];
    console.log(tudus);
    btn_switch();
    new_tudu = "";
  }
</script>

<h1>Tasks</h1>

{#each tudus as tudu}
  <TuDuComponent bind:tudu />
{/each}

{#if show_new_tudu_form}
  <form id="login_form" use:form on:submit={createNewTuDu}>
    <input
      type="text"
      name="name"
      use:validators={[required]}
      bind:value={new_tudu}
    />
    <button type="submit">Add</button>
    <div class="hint-space">
      <Hint for="name" on="required">Please give the item a name!</Hint>
    </div>
  </form>
{:else}
  <button on:click={btn_switch}>Add new TuDu</button>
{/if}

<style>
  .hint-space {
    font-size: 20px;
    color: red;
    align-items: left;
  }
</style>
