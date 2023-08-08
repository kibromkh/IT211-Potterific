<!DOCTYPE html>
<html>
<head>
    <style>
        .over {
            background-color: orange;
        }
        .selected {
            background-color: green;
        }
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        #buttons {
            margin-top: 10px;
        }
        #buttons button {
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div id="buttons">
        <button onclick="filterTable('Gryffindor')">Gryffindor</button>
        <button onclick="filterTable('Hufflepuff')">Hufflepuff</button>
        <button onclick="filterTable('Ravenclaw')">Ravenclaw</button>
        <button onclick="filterTable('Slytherin')">Slytherin</button>
        <button onclick="showAllRows()">Reset</button>
    </div>
    <table border='1'>
        <tr>
            <th>name</th>
            <th>role</th>
            <th>house</th>
            <th>gender</th>
            <th>alignment</th>
        </tr>
        <tr>
            <td>Albus Dumbledore</td>
            <td>staff</td>
            <td>Gryffindor</td>
            <td>m</td>
            <td>good</td>
        </tr>
        <!-- Other character rows -->
    </table>

    <script>
        function filterTable(house) {
            var rows = document.getElementsByTagName('tr');
            for (var i = 1; i < rows.length; i++) {
                var cell = rows[i].getElementsByTagName('td')[2];
                if (cell.innerText === house) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }

        function showAllRows() {
            var rows = document.getElementsByTagName('tr');
            for (var i = 1; i < rows.length; i++) {
                rows[i].style.display = '';
            }
        }
    </script>
</body>
</html>

