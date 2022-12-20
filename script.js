<script>
function showFunction() {
    var input = document.getElementById("myInput");

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
</script>
