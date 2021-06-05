const fs = require('fs');
const {Parser} = require('mark-to-jsonml');
const parser = new Parser();


let readme = `# ACT组件文档

---

> 文档已经迁移到各组件所在的文件夹中。\n\n`;

const components = fs.readdirSync('../').filter(item => item.startsWith('a-'));
components.forEach(com => {
    const md = `../${com}/readme.md`;
    try {
        const parsed = parser.parse(fs.readFileSync(md).toString());
        readme += (`## ${parsed[2][2]}  \n\n \` 组件介绍 \` ${parsed[4][1]}\n\n \` 文档链接 \` [./${com}/readme.md](./${com}/readme.md) \n\n \` 最近更新 \` ${fs.statSync(md).mtime.toLocaleString()} \n\n`);
    } catch (e) {

    }
})


fs.writeFileSync('../readme.md', readme);
