# 火狐浏览器安装flash

由于fedora的firefox没有给我默认安装好flash，导致无法播放视频，于是有了这篇文档存在，用于记录自己实践经历，也方便同病者参考。
虽然是针对firefox介绍的安装方法，理论上支持所有浏览器，无论是chrome、opera或在其他。

**以下是详细步骤**：

1. 下载[Adobe Flash Player](https://get.adobe.com/flashplayer),选择`.tar.gz for other Linux`
2. 解压压缩包
3. 打开终端并切换到解压目录
4. 拷贝`libflashplayer.so`到浏览器插件目录下
5. 拷贝`/usr`目录下文件到系统的`/usr`目录
6. 重启浏览器，Enjoy yourself!

### 以下是adobe flash player自己的安装介绍
  >Installing using the plugin tar.gz:
    Unpack the plugin tar.gz and copy the files to the appropriate location.  
    Save the plugin tar.gz locally and note the location the file was saved to.
    Launch terminal and change directories to the location the file was saved to.
    Unpack the tar.gz file.  Once unpacked you will see the following:
      + libflashplayer.so
      + /usr
    Identify the location of the browser plugins directory, based on your Linux distribution and Firefox version
    Copy libflashplayer.so to the appropriate browser plugins directory.  At the prompt type:
      `cp libflashlayer.so <BrowserPluginsLocation>`
    Copy the Flash Player Local Settings configurations files to the /usr directory.  At the prompt type:
      `sudo cp -r usr/* /usr`
    
