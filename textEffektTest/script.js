const typewriter = document.getElementById("typewriterText");
const text =
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt nulla vitae laboriosam rem natus tenetur perspiciatis magnam illo assumenda, nihil atque! Expedita deleniti est, autem nihil magnam excepturi. Numquam?";

function simpleTypewriter(text, typewriter) {
   let i = 0;
   function type() {
      if (i < text.length) {
         typewriter.textContent += text.charAt(i);
         i++;
         setTimeout(type, 100);
      }
   }
   type();
}

simpleTypewriter(text, typewriter);
