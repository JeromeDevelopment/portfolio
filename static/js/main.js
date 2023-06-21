/* CURSOR BEHAVIOR */
const cursor_dot = document.querySelector("[data-cursor-dot]");
const cursor_outline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
    const x_pos = e.clientX;
    const y_pos = e.clientY;

    cursor_dot.style.left = `${x_pos}px`;
    cursor_dot.style.top = `${y_pos}px`;

    /*
    cursor_outline.style.left = `${x_pos}px`;
    cursor_outline.style.top = `${y_pos}px`;
    */

    cursor_outline.animate({
        left: `${x_pos}px`,
        top: `${y_pos}px`
    }, {duration:500, fill:"forwards"});
});