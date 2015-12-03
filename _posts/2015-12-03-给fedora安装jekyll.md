# 给fedora安装jekyll

我的博客[LiinNs](http://liinns.github.io/)是利用Jekyll开发的，现在由于刚迁移开环境到linux下，所以需要重新部署开发环境，详细的安装
步骤大家可以参考[官方文档](http://jekyllrb.com/docs/installation/)，[中文版文档](http://jekyll.bootcss.com/docs/installation/)。

### 我要介绍的是安装过程中的陷阱和需要留意的地方。

1. 首先介绍最省心省力的一个办法。
  * 安装RVM: Ruby Version Manager 
    * `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`
    * `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
  * 安装ruby2.0.0版本 
    * `rvm install 2.0.0` 
  * 安装jekyll 
    * `gem install jekyll -V`

`yum install -y patch libyaml-devel glibc-headers autoconf gcc-c++ glibc-devel patch readline-devel zlib-devel libffi-devel openssl-devel automake libtool bison sqlite-devel`
