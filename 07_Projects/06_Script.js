const insert = document.getElementById('insert');

function generateKeyEventHTML(e) {
    const keyName = e.key === " " ? "Space" : e.key;
    return `
                <div class="color">
                    <table>
                        <tr>
                            <th>Key</th>
                            <th>Keycode</th>
                            <th>Code</th>
                        </tr>
                        <tr>
                            <td>${keyName}</td>
                            <td>${e.keyCode}</td>
                            <td>${e.code}</td>
                        </tr>
                    </table>
                </div>
            `;
}

window.addEventListener('keydown', function (e) {
    insert.innerHTML = generateKeyEventHTML(e);
});