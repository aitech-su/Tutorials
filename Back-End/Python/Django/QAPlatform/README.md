1.pip install django

2.django-admin startproject <myproject>

3.cd <myproject>

4.python manage.py startapp <hello>

5.編輯應用程序的 views.py
打開 hello/views.py，並添加一個視圖來返回 "Hello" 的內容：

6.設定 URL 路徑
在 hello 應用中，創建一個 urls.py 文件（如果還沒有的話），並設置 URL 配置：

7.然後，在項目的主要 urls.py 文件中包含 hello 應用的 URL 配置。
打開 myproject/urls.py 文件，並進行如下修改：

8.python manage.py runserver

9.訪問 URL