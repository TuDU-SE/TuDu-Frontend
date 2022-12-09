<script>
  import TuDuDetail from "./TuDu_detail.svelte";

    let tudus = [
        {"name": "Test#1", "editable": false, "due_date": new Date(Date.now())},
        {"name": "Test#2", "editable": true, "due_date": new Date(Date.now())}
    ]

    let show_detail = false;
    
    function parse_date(date) {
        return date.toISOString().split('T')[0]
    }

    function clicked() {
        console.log("CLICK!")
    }

    function expand_detail() {
        show_detail = !show_detail
    }
</script>
{#each tudus as tudu}
<div class="tudu-component">
    <div class="selector"><button on:click={clicked}></button></div>
    <div class="drop-down"><button on:click={expand_detail}>EXPAND</button></div>
    <div class="name">{tudu.name}</div>
    <div class="annotations">
        {#if tudu.editable}
            <button on:click={clicked}>EDIT</button>
        {/if}
        <div class="dueDate">
            Due until: {parse_date(tudu.due_date)}
        </div>
    </div>
    {#if show_detail}
    <div class="detail">
        <TuDuDetail />
    </div>
    {/if}
</div>
{/each}

<style>
.tudu-component {
    background-color: #B1B1B1;
    color: #686868;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7rem;
    gap: 30px;

    position: relative;
    height: 100%;
    left: 0%;
    right: 0%;
    top: 0px;

    border-radius: 4px;
    font-size: large;
    font-weight: bold;
}
.selector {
    /* Checkbox */

    width: 43px;
    height: 37px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

.dueDate {
    color: red;
}

</style>