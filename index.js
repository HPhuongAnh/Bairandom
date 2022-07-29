document.getElementById("random").onclick = () => {
    const valueRandom = Math.random();
    const isCheckAttendance = !!Math.round(valueRandom);
    document.getElementsByTagName("h2")[0].innerText = isCheckAttendance
        ? "Có"
        : "Không";
};

