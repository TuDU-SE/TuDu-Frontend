<script>
    import TuDuDetail from "./TuDu_detail.svelte";

    export let tudu;
    let show_detail = false;

    function parse_date(date) {
        return date.toISOString().split("T")[0];
    }

    function clicked() {
        console.log("CLICK!");
    }

    function expand_detail() {
        show_detail = !show_detail;
    }
</script>

<div class="tudu-component">
    <div class="selector">
        <input type="checkbox" bind:checked={tudu.finished} />
    </div>
    <div class="drop-down">
        <button on:click={expand_detail}>EXPAND</button>
    </div>
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

<style>
    .tudu-component {
        background-color: #b1b1b1;
        color: #686868;

        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 15px;
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
