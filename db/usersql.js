var UserSQL = {
                insert:'INSERT INTO User(uid,userName) VALUES(?,?)',
                queryAll:'SELECT * FROM User',
                getUserById:'SELECT * FROM User WHERE uid = ? ',
                deleteUid:'DELETE FROM User WHERE uid = ? ',
                updataUser:'UPDATE User SET uid=23 WHERE uid=10',
                likeUser:'SELECT * FROM User WHERE uid LIKE "%3%"',
                orderByUser:'SELECT * FROM User ORDER BY uid ASC'
              };
 module.exports = UserSQL;
