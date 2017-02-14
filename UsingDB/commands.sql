
mysql> insert into todos (1, hello);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '1, hello)' at line 1
mysql> insert into todos values (1, hello);
ERROR 1054 (42S22): Unknown column 'hello' in 'field list'
mysql> select * from todos;
Empty set (0.00 sec)

mysql> insert into todos values (1, 'hello');
Query OK, 1 row affected (0.00 sec)

mysql> select * from todos;
+----+-------+
| id | todo  |
+----+-------+
|  1 | hello |
+----+-------+
1 row in set (0.00 sec)
