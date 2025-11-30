// 切换到 admin 数据库创建用户
db = db.getSiblingDB('admin');

db.createUser({
  user: 'panda',
  pwd: 'Changeme_123',
  roles: [
    {
      role: 'readWrite',
      db: 'panda'
    },
    {
      role: 'readWrite', 
      db: 'admin'
    },
    {
      role: 'readWrite',
      db: 'config'
    },
    {
      role: 'readWrite',
      db: 'local'
    }
  ]
});

// 创建 panda 数据库及其集合
db = db.getSiblingDB('panda');
db.createCollection("chat_sessions");
db.createCollection("factor_amount");
db.createCollection("factor_analysis_results");
db.createCollection("factor_analysis_stage_logs");
db.createCollection("factor_base");
db.createCollection("factor_close");
db.createCollection("factor_high");
db.createCollection("factor_low");
db.createCollection("factor_market_cap");
db.createCollection("factor_open");
db.createCollection("factor_turnover");
db.createCollection("factor_volume");
db.createCollection("stock_market");
db.createCollection("stocks");
db.createCollection("tasks");
db.createCollection("user_factors");

// 创建 admin 数据库及其集合
db = db.getSiblingDB('admin');
db.createCollection("temproles");
db.createCollection("tempusers");

// 创建 config 数据库及其集合
db = db.getSiblingDB('config');
db.createCollection("settings");

// 创建 local 数据库及其集合
db = db.getSiblingDB('local');
db.createCollection("replset.election");  // 注意：带点号的集合名
db.createCollection("replset.minvalid");  // 注意：带点号的集合名  
db.createCollection("startup_log");

print('panda-quant 多数据库结构初始化完成');