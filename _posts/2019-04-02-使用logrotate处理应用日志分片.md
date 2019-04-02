---
categories: nginx
tags: [nginx, 日志分片处理, logrotate]
comments: true
---
1. monthly: 日志文件将按月轮循。其它可用值为‘daily’，‘weekly’或者‘yearly’。
2. rotate 5: 一次将存储5个归档日志。对于第六个归档，时间最久的归档将被删除。
3. compress: 在轮循任务完成后，已轮循的归档将使用gzip进行压缩。
4. delaycompress: 总是与compress选项一起用，delaycompress选项指示logrotate不要将最近的归档压缩，压缩将在下一次轮循周期进行。这在你或任何软件仍然需要读取最新归档时很有用。
<!-- more -->
5. missingok: 在日志轮循期间，任何错误将被忽略，例如“文件无法找到”之类的错误。
6. notifempty: 如果日志文件为空，轮循不会进行。
7. create 644 root root: 以指定的权限创建全新的日志文件，同时logrotate也会重命名原始日志文件。
8. postrotate/endscript: 在所有其它指令完成后，postrotate和endscript里面指定的命令将被执行。在这种情况下，rsyslogd 进程将立即再次读取其配置并继续运行。
9. dateext: 旧日志文件以创建日期命名
10. olddir “dir”：指定日志文件的旧版本放在 “dir” 中
11. postrotate：引入一个在日志被轮换后执行的脚本
12. prerotate：引入一个在日志被轮换前执行的脚本
13. copytruncate: 利用复制源日志文件进行日志分片，处理由文件读写占用文件句柄而分片失败的情况

使用示例：
{% highlight nginx linenos %}
/home/xxoo.com/www/log/*.log {
    daily
    missingok
    rotate 3
    compress
    delaycompress
    notifempty
    create 664 nobody nobody
    sharedscripts
    postrotate
        /etc/init.d/nginx reload > /dev/null
    endscript
} 
{% endhighlight %}

{% highlight nginx linenos %}
/data/www/ruby-china/current/log/production.log {
  weekly
  missingok
  rotate 12
  compress
  dateext
  delaycompress
  lastaction
    pid=/data/www/ruby-china/current/tmp/pids/unicorn.pid
    sudo test -s $pid && sudo kill -USR1 "$(cat $pid)"
  endscript
}
{% endhighlight %}