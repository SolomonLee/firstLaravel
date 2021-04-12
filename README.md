## firstLaravel

-   版本與相關使用  
    PHP - 7.4  
    Laravel - 8  
    PostgreSQL - 13  
    Composer - 2.0.12  
    React - 16  
    react-redux - 7

## 自動建置指令

-   初始化資料表(危險)  
    php artisan migrate:fresh

-   資料表塞入資料  
    php artisan db:seed --class=UserTypeSeeder

## 其他指令

-   輸出 postgresql db  
    .\pg_dump.exe -U username YourDBName >> G:\DBSchema.sql

-   清除 cache  
    php artisan config:cache

npm run watch
