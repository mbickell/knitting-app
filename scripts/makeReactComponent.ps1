$type = $args[0].ToLower();
$name = (Get-Culture).TextInfo.ToTitleCase($args[1])
$jsx = "import React from `"react`";
import styles from `"./$name.module.scss`";

const $name = () => {
  return ( 
    <>
      <p>$name works</p>
    </>
  );
}
 
export default $name;";

$test = "import React from `"react`";
import { $name } from `"./$name`";

describe(`"$name tests`", () => {
  let component;

  beforeEach(() => {
    component = 
  })
});";

md .\src\$type\$name;
$jsx | Out-File .\src\$type\$name\$name.jsx;
$test | Out-File .\src\$type\$name\$name.test.js;
Out-File .\src\$type\$name\$name.module.scss;
