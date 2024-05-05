# 用户须知

这一个非常简单且粗糙的脚本（[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 初学者应该都能看懂），用于解除网页对选择、剪切、复制、粘贴、保存、右键菜单和打开开发者工具的限制和修改，并恢复其默认行为。

## 特别注意

此脚本匹配大多数网站，可能导致的负面影响有：

- 影响部分网页的右键菜单。
- 影响部分网页的快捷键功能。
- 影响部分网页的部分已隐藏元素的再显示。

如有以上问题，请尝试禁用该脚本以恢复正常的使用，并[联系作者](mailto:HL-Bo<hl-bo@outlook.com>?cc=EMail%20Robot%20of%20HL-Bo<hl_bot@163.com>&subject=Application%20of%20Adding%20An%20Exclusion%20Rule%20for%20user-script%2fremove-limits "发送关于将某页面添加至此脚本排除名单的申请")将相应的站点添加至排除名单。

脚本在启用了框架的页面中可能被多次注入并运行，如有必要，请转至用户脚本管理器关于该脚本的设置页面并将“仅在顶层页面（框架）运行”（或类似选项）设置为“是”。

此外，脚本仅在用户脚本管理插件（如 [Greasemonkey](https://www.greasespot.net/ "油猴")，[Tampermonkey](https://www.tampermonkey.net/ "篡改猴") 以及 [Violentmonkey](https://violentmonkey.github.io/ "暴力猴")）已安装、启用并可修改页面时有效。

## 未实现的功能

- 此脚本不包含图像识别（OCR）功能，所以对于通过将文本转换为图像从而实现禁用复制的网页无效。
- 此脚本的禁用 [`debugger`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger) 的相关功能尚不完善，所以对于循环执行debugger从而实现禁用开发者工具的网页可能无效。
- 此脚本的样式审查功能尚不完善，所以对于插入不可见的文本从而实现文本混淆的网页可能无效。
- 此脚本暂时不包含字体分析功能，所以对于对文本编码和字形进行重映射从而实现文本混淆的网页无效。

## 关于此脚本

如此脚本有任何其他上文未说明的问题或对此脚本有任何的意见或建议，无法或者不愿在存储库中公开提出的，可以通过电子邮件[向作者反馈](mailto:HL-Bo<hl-bo@outlook.com>?cc=EMail%20Robot%20of%20HL-Bo<hl_bot@163.com>&subject=Comments%20or%20Suggestions%20for%20user-script%2fremove-limits "发送关于此脚本的意见或建议")。

欢迎参与此脚本的开发，完善此脚本并（或）为此脚本添加新的功能。

此脚本的存储库位于 [GitHub](https://github.com/HL-Bo/user-script)，其镜像位于 [Codeberg](https://codeberg.org/HL-Bo/user-script)。如有需要，请向位于 GitHub 上的存储库提交 [Issues](https://github.com/HL-Bo/user-script/issues) 和（或） [Pull Requests](https://github.com/HL-Bo/user-script/pulls)，镜像存储库的相关内容可能无法被及时发现、充分讨论和审查。此外，请注意存储库要求[对提交进行签名](https://docs.github.com/zh/authentication/managing-commit-signature-verification/signing-commits)。

此脚本的活跃开发分支暂定为 `feature/remove-limits`，请将代码合并申请指向此分支而非 `develop` 分支。

## 授权与许可

图标来自 Twitter Twemoji，参见 <https://github.com/twitter/twemoji/blob/master/assets/svg/1f4c4.svg>，使用 [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/ "知识共享公共许可协议 - 署名 4.0 国际")，作者及版权声明如下：[Copyright 2020 Twitter, Inc and other contributors](https://github.com/twitter/twemoji)

此脚本使用 [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html "GNU Affero通用公共许可证") ，作者在许可证所规定的范围内保留所有权利。
