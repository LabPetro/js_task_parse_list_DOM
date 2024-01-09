// helper function
function t(t){return Number(t.replace(/\$|,/g,""))}var r=document.querySelector("ul");!function(r){Array.from(r.children).sort(function(r,a){var e=t(r.getAttribute("data-salary"));return t(a.getAttribute("data-salary"))-e}).forEach(function(t){r.appendChild(t)})}(r),r.children.map(function(t){return{name:t.textContent.trim(),position:t.getAttribute("data-position"),salary:t.getAttribute("data-salary"),age:parseInt(t.getAttribute("data-age"))}});//# sourceMappingURL=index.549c7690.js.map

//# sourceMappingURL=index.549c7690.js.map
