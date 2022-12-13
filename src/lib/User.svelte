<script>
    export let user;
    console.log(typeof user.login_time)
    function parse_date(date) {
        return date.toISOString().split("T")[0];
    }
</script>

<ul>
    <li>{user.name}</li>
    <li>Login time: {user.login_time}</li>
</ul>
