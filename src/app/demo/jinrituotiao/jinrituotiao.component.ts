import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http-service.service';

@Component({
  selector: 'app-jinrituotiao',
  templateUrl: './jinrituotiao.component.html',
  styleUrls: ['./jinrituotiao.component.scss']
})
export class JinrituotiaoComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    // this.fasong(); // 发送博客
  }

  private fasong() {
    this.httpService.post(
      'http://mp.toutiao.com/core/article/edit_article_post/?source=mp&type=article',
      {
      //   article_type: 0,
      //   title: '手动编译 Nginx 并安装 VeryNginx',
        // content: `<p><pre>cd&nbsp;/usr/local/src</pre><p>编译器安装</p><pre>apt-get&nbsp;install&nbsp;build-essential&nbsp;libtool</pre><p>PCRE (8.41)</p><p>下载并解压&nbsp;PCRE：</p><pre>wget&nbsp;https://ftp.pcre.org/pub/pcre/pcre-8.41.tar.gztar&nbsp;-xzvf&nbsp;pcre-8.41.tar.gz</pre><p>zlib (1.2.11)</p><p>下载并解压&nbsp;zlib：</p><pre>wget&nbsp;http://www.zlib.net/zlib-1.2.11.tar.gztar&nbsp;-xzvf&nbsp;zlib-1.2.11.tar.gz</pre><p>OpenSSL (1.0.2l)</p><p>下载并解压&nbsp;OpenSSL：</p><blockquote><p><code>lua-nginx-module</code>&nbsp;不支持 1.1.0</p></blockquote><pre>wget&nbsp;https://www.openssl.org/source/openssl-1.0.2l.tar.gztar&nbsp;-xzvf&nbsp;openssl-1.0.2l.tar.gz</pre><p>ngx_lua 依赖</p><p>VeryNginx 使用到了以下模块，自己编译 Nginx 时，需要包含以下模块才能正常使用。</p><ul class=" list-paddingleft-2"><li><p>http_ssl_module</p></li><li><p>http_stub_status_module</p></li><li><p>lua-nginx-module</p></li></ul><blockquote><p><code>ngx_lua</code>&nbsp;即为&nbsp;<code>lua-nginx-module</code></p></blockquote><p><code>http_stub_status_module</code>&nbsp;和&nbsp;<code>http_ssl_module</code>&nbsp;只需要在&nbsp;<code>./configure</code>&nbsp;时加上两行即可。<code>lua-nginx-module</code>&nbsp;稍微麻烦一点，它需要以下依赖：</p><ul class=" list-paddingleft-2"><li><p>LuaJIT 2.0 或 LuaJIT 2.1（推荐）或 Lua 5.1（5.2 目前不支持）</p></li><li><p>ngx_devel_kit（NDK）</p></li><li><p>ngx_lua</p></li></ul><p>同样进入&nbsp;<code>/usr/local/src</code>&nbsp;目录：</p><pre>cd&nbsp;/usr/local/src</pre><p>LuaJIT (2.1.0-beta3)</p><p>下载并安装&nbsp;LuaJIT：</p><pre>wget&nbsp;http://luajit.org/download/LuaJIT-2.1.0-beta3.tar.gztar&nbsp;-xzvf&nbsp;LuaJIT-2.1.0-beta3.tar.gzcd&nbsp;LuaJIT-2.1.0-beta3make&nbsp;&amp;&amp;&nbsp;sudo&nbsp;make&nbsp;install</pre><blockquote><p>它会自动将 LuaJIT 安装到&nbsp;<code>/usr/local/</code></p></blockquote><p>设置环境变量：</p><pre>export&nbsp;LUAJIT_LIB=/usr/local/libexport&nbsp;LUAJIT_INC=/usr/local/include/luajit-2.1/</pre><p>ngx_devel_kit (0.3.0)</p><p>下载并解压&nbsp;ngx_devel_kit：</p><pre>wget&nbsp;https://github.com/simpl/ngx_devel_kit/archive/v0.3.0.tar.gztar&nbsp;-xzvf&nbsp;v0.3.0.tar.gz</pre><p>ngx_lua (0.10.11rc2)</p><p>下载并解压&nbsp;ngx_lua：</p><pre>wget&nbsp;https://github.com/openresty/lua-nginx-module/archive/v0.10.11rc2.tar.gztar&nbsp;-xzvf&nbsp;v0.10.11rc2.tar.gz</pre><p>删除所有下载的压缩包：</p><pre>rm&nbsp;./*.tar.gz</pre><p>编译安装 Nginx</p><p>Nginx (1.12.1)</p><p>下载并解压&nbsp;Nginx：</p><pre>wget&nbsp;https://nginx.org/download/nginx-1.12.1.tar.gztar&nbsp;-xzvf&nbsp;nginx-1.12.1.tar.gz</pre><p>配置与编译</p><pre>cd&nbsp;nginx-1.12.1.tar.gz./configure&nbsp;--prefix=/usr/local/nginx&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--sbin-path=/usr/local/sbin/nginx&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--pid-path=/usr/local/nginx/logs/nginx.pid&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--error-log-path=/usr/local/nginx/logs/error.log&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--http-log-path=/usr/local/nginx/logs/access.log&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--with-ld-opt=-Wl,-rpath,/usr/local/lib/&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--with-http_ssl_module&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--with-http_stub_status_module&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--with-pcre=../pcre-8.41&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--with-zlib=../zlib-1.2.11&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--with-openssl=../openssl-1.0.2l&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--add-module=../ngx_devel_kit-0.3.0&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--add-module=../lua-nginx-module-0.10.11rc2make&nbsp;sudo&nbsp;make&nbsp;install</pre><p>安装 VeryNginx</p><p>下载与安装 VeryNginx</p><pre>git&nbsp;clone&nbsp;https://github.com/alexazhou/VeryNginx.gitcd&nbsp;VeryNginxpython&nbsp;install.py&nbsp;install&nbsp;verynginx</pre><p>更新 Nginx 配置文件</p><p>有两种方式：</p><ol class=" list-paddingleft-2"><li><p>将 VeryNginx 的&nbsp;nginx.conf&nbsp;替换&nbsp;<code>/usr/local/nginx/conf</code>&nbsp;目录下的文件。</p></li><li><p>使用自己的配置文件，方法如下：</p></li></ol><ul class=" list-paddingleft-2"><li><p>在&nbsp;<code>http</code>&nbsp;配置块外部，加入：</p><pre></pre></li></ul><ol class=" list-paddingleft-2"><li><p><code>include /opt/verynginx/verynginx/nginx_conf/in_external.conf;</code></p></li></ol><ul class=" list-paddingleft-2"><li><p>在&nbsp;<code>http</code>&nbsp;配置块内部，加入：</p><pre></pre></li></ul><ol class=" list-paddingleft-2"><li><p><code>nclude /opt/verynginx/verynginx/nginx_conf/in_http_block.conf;</code></p></li></ol><ul class=" list-paddingleft-2"><li><p>在&nbsp;<code>server</code>&nbsp;配置块内部，加入：</p><pre></pre></li></ul><ol class=" list-paddingleft-2"><li><p><code>include /opt/verynginx/verynginx/nginx_conf/in_server_block.conf;</code></p></li></ol><p>登录 VeryNginx</p><p>访问&nbsp;<code>http://yourdomain.com/verynginx/index.html</code>&nbsp;就可以见到 VeryNginx 的控制面板。</p><p>默认用户名和密码都是 verynginx，登录后请务必修改。</p><p><br/></p>`,
        // claim_origin: 0,
        // article_ad_type: 3,
        // add_third_title: 0,
        // recommend_auto_analyse: 0,
        // tag: '',
        // article_label: '',
        // is_fans_article: 0,
        // govern_forward: 0,
        // push_status: 0,
        // push_android_title: '',
        // push_android_summary: '',
        // push_ios_summary: '',
        // timer_status: 0,
        // timer_time: '2017-10-29 09:06',
        // column_chosen: 0,
        // pgc_id: 0,
        // pgc_feed_covers: [],
        // from_diagnosis: 0,
        // save: 1
      },
      data => {
        console.log(JSON.stringify(data));
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }
}
