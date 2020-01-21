$type=$args[0]
$name=$args[1]

md .\src\$type\$name;
New-Item -ItemType "file" -Path .\src\$type\$name\$name.jsx, .\src\$type\$name\$name.module.scss, .\src\$type\$name\$name.test.js;
