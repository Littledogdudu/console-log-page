// 插件功能数据
export const pluginFeatures = [
  {
    id: 1,
    title: "基础功能（点击图片放大预览）",
    gifUrl: "/images/plugins/basic/basic-1.gif",
    description: `
			<h2>基础功能（以下为默认快捷键）</h2>
			<ul>
				<li>Alt + 1: 生成当前光标所在变量的console.log语句</li>
				<li>Alt + 2: 删除所有插件生成的console.log语句</li>
				<li>Alt + Shift + 1: 注释所有插件生成的console.log语句</li>
				<li>Alt + Shift + 2: 解注释所有插件生成的console.log语句</li>
			</ul>
		`
  },
  {
    id: 2,
    title: "选中区域内操作",
    gifUrl: "/images/plugins/basic/basic-2.gif",
    description: `
			<h2>选中区域内操作</h2>
			<h3>可仅对选中区域内的console.log表达式的操作如下</h3>
			<ul>
				<li>删除</li>
				<li>注释</li>
				<li>解注释</li>
			</ul>
		`
  },
  {
    id: 3,
    title: "无变量打印",
    gifUrl: "/images/plugins/basic/basic-3.gif",
    description: `
			<h2>无变量选中时也可生成用于标记的console.log表达式</h2>
			<p align="right">——默认不开启，需要自行设置开启</p>
			<ul>
				<li>光标不在变量中且没有选中变量时生成</li>
				<li>Alt + 1生成</li>
			</ul>
		`
  },
  {
    id: 4,
    title: "Live Template打印",
    gifUrl: "/images/plugins/basic/basic-4.gif",
    description: `
      <h2>生成console表达式可自定义命令</h2>
			<ul>
				<li>Ctrl + Alt + 1生成</li>
			</ul>
    `
  },
  {
    id: 5,
    title: `打印的文件名是否需要后缀名（该选项作用于\${fileName}占位符）`,
    gifUrl: "/images/plugins/settings/file-suffix-setting.gif",
    description: `
      <h2>用于控制\${fileName}占位符的输出结果</h2>
			<ul>
				<li>启用：\${fileName}占位符输出的文件名包含文件后缀名（例如.vue）</li>
				<li>不启用：\${fileName}占位符仅输出文件名，不再包含文件后缀名</li>
			</ul>
    `
  },
  {
    id: 6,
    title: `文件所在路径是否根据基准文件名截断（该组选项作用于\${filePath}占位符）`,
    gifUrl: "/images/plugins/settings/path-is-cut.gif",
    description: `
      <h2>控制\${filePath}输出的开关</h2>
			<ul>
				<li>启用：可通过下面的配置控制\${filePath}的输出</li>
				<li>不启用：截断到src文件夹或项目根目录</li>
			</ul>
    `
  },
  {
    id: 7,
    title: `文件所在路径基准文件夹名称`,
    gifUrl: "/images/plugins/settings/path-cut-dir.gif",
    description: `
      <h2>该选项作用于\${filePath}占位符</h2>
			<ul>
				<li>\${filePath}占位符输出的文件路径从当前文件所在文件夹出发，截止到该设置配置的值</li>
				<li>多个文件夹名称可使用英文逗号「,」分隔</li>
			</ul>
    `
  },
  {
    id: 8,
    title: `文件所在路径分隔符`,
    gifUrl: "/images/plugins/settings/path-cut-separator.gif",
    description: `
      <h2>用于控制\${filePath}占位符输出的文件夹之间的分隔符</h2>
    `
  },
  {
    id: 9,
    title: `文件所在路径是否包含基准文件夹名称`,
    gifUrl: "/images/plugins/settings/path-cut-include-dir.gif",
    description: `
      <h2>控制是否显示「文件所在路径基准文件夹名称」配置的截断文件夹</h2>
			<ul>
				<li>启用：显示「文件所在路径基准文件夹名称」配置的截断文件夹</li>
				<li>不启用：隐藏「文件所在路径基准文件夹名称」配置的截断文件夹</li>
			</ul>
    `
  },
];