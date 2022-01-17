var r = 3.5;
document.getElementById("range-result").innerHTML = r + "%";

function compute() {
  const p = document.getElementById("principal").value;
  const n = document.getElementById("years").value;
  const result = (p * n * r) / 100;

  document.getElementById("result").innerHTML = `
        <div>
        If you deposit <span>${p}</span>
        </div>
        <div>
        at an intrest rate of <span>${r}</span>
        </div><div>
        You will receive an amount of <span>${result}</span>.
        </div><div>
        in the year <span>${n}</span>         
        </div>
    `;
}

function calcRange(val) {
  r = val;
  document.getElementById("range-result").innerHTML = r + "%";
}
