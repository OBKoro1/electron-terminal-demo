### 项目演示

**clear命令演示**

实际上就是将历史命令行输出的数组重置为空数组。

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2021/electron-terminal/electron-terminal-clear.gif)

**执行失败箭头切换**

根据子进程`close`事件，判断执行是否成功，切换一下图标。

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2021/electron-terminal/electron-terminal-error.gif)

**cd命令**

识别`cd`命令，根据系统添加获取路径(`pwd`/`chdir`)的命令，再将获取到的路径，更改为最终路径。

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2021/electron-terminal/electron-terminal-cd.gif)

**giit提交代码演示**

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2021/electron-terminal/electron-terminal-git.gif)

### 启动与调试

**安装**

```
npm install
```

**启动**

1. 通过vscode的调试运行项目，这种形式可以直接在VSCode中进行debugger调试。
    
    ![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2021/electron-terminal/electron-terminal-vscode-config.jpg)

2. 如果不是使用vscode编辑器, 也可以通过使用命令行启动。

```js
npm run start
```

### 项目介绍文章

[从零开始带你写一个运行命令行的终端[手把手教学]](http://obkoro1.com/web_accumulate/accumulate/electron/electron-terminal-demo.html)


项目idea诞生于我们团队开源的另一个开源项目：[electron-playground](https://github.com/tal-tech/electron-playground), 目的是为了让小伙伴学习`electron`实战项目。

electron-playground是用来帮助前端小伙伴们更好、更快的学习和理解前端桌面端技术Electron, 尽量少走弯路。

它通过如下方式让我们快速学习electron。

1. 带有gif示例和可操作的demo的教程文章。
2. 系统性的整理了Electron相关的api和功能。
3. 搭配演练场，自己动手尝试electron的各种特性。