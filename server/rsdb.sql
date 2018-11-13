/*
SQLyog Professional v12.08 (64 bit)
MySQL - 5.6.17 : Database - rsdb
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`rsdb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `rsdb`;

/*Table structure for table `_mysql_session_store` */

DROP TABLE IF EXISTS `_mysql_session_store`;

CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `_mysql_session_store` */

insert  into `_mysql_session_store`(`id`,`expires`,`data`) values ('USER_SID:-ar8YK6n4IltThrpkwBzte0n3Ykk0JDI',1539677430351,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:-hu81_o-zTNcvfkPFVKQKFBnpiZXMj4n',1539394093880,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:-IRCIy0E9W9K8KBDSa5D6kc17ngKftly',1541757347264,'{\"user\":\"15800000000\",\"id\":16}'),('USER_SID:06zZD3V8gmk5c_adHoF6n2GGnp-HpdAT',1539339167229,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:0acgs3WScJW2NMQv-QakxmIFJ5EUScVp',1539331226974,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:0dN4yMBexT4LjXg_lKb7XaPQpF5G734L',1539331121401,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:0tnoPhkg4nPDmx3udR0c-REvsK5GzBrF',1539420152487,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:0uPgam9JW9i_S0LZaFhAAR3Hoh7Jbn82',1539339481031,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:0UrG3VbpYGKYMd646qf89fWC-hTnFVKh',1539413825930,'{\"user\":\"15800000000\",\"id\":16}'),('USER_SID:15teqTUo_NhDVDbFRjkE8bOHpeJOxvuO',1539674786295,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:1iiDmXxeu_W__H1FOlAuBbdHwqXHSGAj',1541573063651,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:2SNlr6SQFgyOZ4VPuDIPQ29Z4bDsjgvZ',1539347808364,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:4iRCQmuh5YesTuo5bfyJ7_0benYwcmI-',1535709863153,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:4o3qhreaccCTroH61t0Cg8PoIgc78Qrv',1539396186825,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:562nAgqHOjZ0m63khMNlv1RiG5Wjo7Eo',1541572952196,'{\"account\":\"13488878945\",\"id\":14}'),('USER_SID:5tf-w6Zn-wFGjJgmINR_GmHmoHco2PGl',1539334352428,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:5XsCqm2Bw2R5XMmEX1KJhehbdZtkMwWo',1539169362527,'{\"account\":\"15900000000\",\"id\":5}'),('USER_SID:73P0SKuGLdNB2z_LIfPJx_0WOO-o-bPK',1539334436009,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:7lHROxdM6oXcEZ0wlUmvQw9-E587u7e7',1539348043241,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:7rCkhAff0TK8Kzi6PSgA6xIKdUhfszM8',1541573658699,'{\"account\":\"13412454125\",\"id\":17}'),('USER_SID:8_FZ8vy8S61IN4s0Swbokh7k_Oxvldgp',1539078348681,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:aeRT-3hdHzU_QijZ55L8nb92SmjRnqRZ',1540885825643,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:AmRy8n7RgJXIrknkB7yUNdlLSyFwP2ds',1541563957336,'{\"account\":\"\",\"id\":13}'),('USER_SID:apO1JJ-ns9ZsqPovpxUBdZWbrrLzaI5p',1539347478002,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:aSl2qWajVUpVpp0ugQsn_DBz9vUwdawG',1539411762686,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:bJ_cVz8nCUZINsBF8GIA78mNiOxvsCKK',1539331071992,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:bqvhuzmiB9ppyWpTzARrdhC4zhE2J-sk',1539917005298,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:bvjAIOL2uBpx7Z9ig8swWhmLStr29Oli',1539934698016,'{\"account\":\"13812345678\",\"id\":10}'),('USER_SID:C7HduuBZRrEXd4XXezdqckq_TjCmk8QR',1541574037079,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:CRJsKq5Tt7aaf1r8ymB0wDyzt-pwk8Xu',1539339777870,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:CuPHL3w1mGqRoputPh6rWxhEmaph5GU7',1539396834786,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:d34OxQXhM3RhCiEoslroiAzTTAE9MhZv',1538108219715,'{\"user\":\"laoer\",\"id\":8}'),('USER_SID:dbdR_KS62hv8JC9E6XFGc5SMQHG0t7AE',1539675667321,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:dcZrXJvScSCilQRQHaeIY3-MECrPWvO7',1539339433337,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:DGHJ7fVa5jtL7Y1zjBlff0hMnCsVcqid',1541913352865,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:duKzm3kSCrCy-RmKfo7qGDklRDY1fa-l',1539414929445,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:E9n7ZoW6QPMxayzKHOtLXzP2r5wmz8tL',1539348006513,'{\"account\":\"13777777777\",\"id\":9}'),('USER_SID:EG4WaSpyOjaXZIdVI8wZE5H6Z_2v8kTZ',1539397566414,'{\"user\":\"laoxu\",\"id\":6}'),('USER_SID:ek99Mxunzcr_6IoGht62HJ7TADxNTSOO',1539347044934,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:f2hMQZz3XpGeui_PDwZX5FP9UDAi1Qe7',1539331260505,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:FxkCDsTVUPkQN0jpjlqRJw6ScvNEfRu_',1540884632237,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:G8rlzOfjxLWC2-YI11YmedivBGcd3VTd',1539917661855,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:Gc3DujLYrGKqzLCOdVHCDVk4_HzgUwZy',1539334330574,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:H6HpX6EEeyrxQC0KQ_Fj85aFdwQWHD9N',1535710285667,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:H804XufAdfMuKJCgvIvaanRU4UmR01e1',1539339388626,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:HcX4ZKv65S7Q7NgEj-TMtUq9s3vd_nkG',1539420364562,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:hiJxgDOhYS8DTaBizaP-BuH8vVbJr2MC',1539331596599,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:Hmp3P0M0EkbBj6DMA5dmhzr2uu4_YO9U',1541737717359,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:hU2uBy0GlMhELHCGRMuBNSsXxbs11he0',1539347345584,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:HyzAQ9FkIbk-XJgHyVvtjerLXsd_zTQO',1539331485744,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:I2plpIm8__qkNbCiVoZBaTHGzlf2In-n',1539395751484,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:I4SMENEE5vj5JtziFotaoPOC4aQVwtMp',1539331568209,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:iBfpYaey-75s6g7SV3_A6c8h0Klw5RVA',1539347926551,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:ITdKefxdndAo3DalsHEXWOb8_glbyZoG',1539236802644,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:IUieR-iUuJJIHYAQD6dxW6S8wxAI9E1d',1539419464086,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:JEbLTA4MH8wqMvur8bY_dhRJfOFK9Ymv',1539339357744,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:JJ1zzlqTiP2PZelBb4_JgiJMJEgEFjS9',1539422938202,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:jZaqW8z1jttB3NZYYLQSPCUlWApCpaJl',1539932664243,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:k4LDv8QNhsbrQEQ4RGCHN768af12CX_5',1539339948852,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:k5TkJmoX8JUVQNZ8rtb68lpPJNYYQMDv',1539338538193,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:kBrLb_a5gHRxkJAi-vwC7bnhsAbIbeTP',1539427041913,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:KcOcUPVC6rlDmJpaZ-dQgU8tS3f75kE2',1541757378459,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:KZ3xq6vgeTUePkl0O8T8zayfzprr2ewT',1539338444938,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:lcUBPZU2Xsh4ms-dxrh4rqr75jLBz2Jl',1539331388798,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:lnuPQ3BUcvuDOYxkGB3af3b52gbFermM',1541841129292,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:Ls49eNpkI7oWx143U_zzW_YGaN47MZ_e',1539346771794,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:L__XYQuGqUcZxB382fqbkaFA69aQSKBz',1539676476409,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:M1lyRZ2lBJLqUBZL4Je4UtK7JTxXwg67',1539672498356,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:MdGpo6_jsv4XC15Gp9GyT_ZSv9sit8fE',1539396682879,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:MgcpXKbADCzLDukv_B2_-j8hOAt8dFrK',1539674757933,'{\"user\":\"15800000000\",\"id\":16}'),('USER_SID:mRQxo_LrQmAIErt-sGDNh6Z0vNKu9MVb',1539049123149,'{\"account\":\"13172858295\",\"id\":3}'),('USER_SID:MVFZqzxNz_tbTgiXRive1t_RdnesOV4K',1539069977380,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:NAhp4megzt0JPaZLJOZtikGLfyYQse2o',1539420410632,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:nd_aXv2IBRTyK3-nO8VLJaLfXQKxtshU',1539396214441,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:NlhBsE6fxxGh2dcf6p2gbPRwvioD9rvB',1539331033929,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:Nqwk18mxqu3iU6-MBCIeZSPh0u1GQD-P',1538119494765,'{\"account\":\"13420515060\",\"id\":2}'),('USER_SID:nsf7ACdaQoyJbkjS86LO5pg5t5eqgMd6',1541757241010,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:n_C95hljQJEhj0UUZb2O0c5k4-baHi-s',1535708466499,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:o5Z4ZKsudc9AaDYL-pyuAXMjDqP0OgKz',1541573156682,'{\"account\":\"13412345678\",\"id\":15}'),('USER_SID:peiEE9SNotFRx9oYkWjBs3M--qrbs3Vj',1539347843261,'{\"account\":\"15800000000\",\"id\":8}'),('USER_SID:PREI-Syq3Y2JkhwqpD_McFpL-27pbVXH',1539656107192,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:QLwQ120RiC3S7zzm7s8jfPaMGj31vu7Z',1541554352852,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:qmTyfqDD8r1JAo1yHQqN6OvTmHjzqKPK',1539334417689,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:qp5EFHfE5wACWHXO_Feyl8uNxuN7G27h',1540884876500,'{\"account\":\"132123456789\",\"id\":12}'),('USER_SID:QsrkPob1w5PmnoIZz5SfsP9gK-Fq_UR_',1539933202441,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:Qt8-_1jpruO-hMrItd4RhUeOvY1WMG2G',1539420197248,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:RbwVowAQG2MDeJGBS-sExqGSDv4uxfvY',1541567627534,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:Rejc8qfPRb6zAQtWrTYuBx5-ks4fA8MM',1535707097818,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:RX_Y5fyefPQR-Fer5r_yB38gYbcsbmgp',1540885098745,'{\"user\":\"13212345678\",\"id\":20}'),('USER_SID:Rz-SKSj8WgVIsvwp290Sp7V5RL0GZQAl',1539677844716,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:s98lQ1ERlnveH4XRtboEOLS55hRddpLw',1539338775802,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:sLVIVao1m3UJxbLeEHm2pUCqd9kSpaSk',1540884665237,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:snYDFJJ2sEBFJe_eabhppRXQv7cDGOrW',1539675294523,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:STbSANGRqJZozxH0e_jB44cWKdCHce1b',1541573390690,'{\"account\":\"\",\"id\":16}'),('USER_SID:t3Qngn3Zsxec7cp6bLipEe_HxWCHpoSI',1539338625558,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:tk79Y7D5yJoykIHoj3sjFuBdkRpXVcok',1539078290073,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:TMBTfwLhC6aXd6kcpmzkYv1qQZ0-tHUo',1539339645893,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:tQ64P2CMHWAw5VZSFcVZ4k47O9YyPPq5',1539235960760,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:TTpqdfVSU7LsoXdz9qlgL15TdoUdJwME',1539339412683,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:t_-uEe1EGF8minTr1SRkvrJdMd58po_e',1541841107147,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:u0cyrmnoWbiItC-pqVUoKc5Rxbn1FulQ',1539411602697,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:u2zHBvkSJbu-KEz_LBqnbMqPvBpGOukk',1539240504642,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:U8QFOPu__M1KbPuezq64ErbEAzwIJWpg',1539239740089,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:ULBt8fjbYgcllswvwop1BYQYQ3p_MN5M',1539347004953,'{\"account\":\"13900000000\",\"id\":6}'),('USER_SID:uO3XS3BIXQJA1ufkAIfU0Unn1XkPGqKd',1539394828411,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:UQC-LgmkMmYgelKGV35BDyfeXrxXEMVy',1540884823887,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:UqlVei5laqzdwFilJ6Ua8dTUVMexIaCd',1539676570085,'{\"user\":\"13777777777\",\"id\":17}'),('USER_SID:V73sIREGDL7Bn9wjeGag_SevO7P7mepC',1539395718478,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:VjgFsPoq2yBWSkJD1hs-TDp94IqGeJQ4',1539934820176,'{\"account\":\"13778945632\",\"id\":11}'),('USER_SID:VqIQO3pPeGa8Ybl2rElD7_JicXQQWa_q',1539396055475,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:vr4A-OIhsOMrrsCwyKrK04h7EVMQqeDZ',1535709790635,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:VRazFAltYGj4vAS7UZsVXdP4wY16l59G',1539338414974,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:vSsFUOF2pZVJTIR1yAJWqHQ6kfjUxbGt',1539676018637,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:W81g2mpxXKL7fr9B2NTKoddn2OgW4YWS',1535709139140,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:Wa0UCuke2H7LByjL3ItZosdwWV-yykCQ',1540885793783,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:whEoV3XDpyfeyq6O6iznIphp729rYuDx',1539414285140,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:WhuNibPHk8-LnTonzSNKuSgjpX3wRhlE',1539678154357,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:WvteKnygpkdWmj9evSeBs6CGeBKEJ101',1539339219189,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:x-Mj-Z5noBj0-EKRfKbMHyrkGSEvsxwv',1539078004204,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:X28lLbWC3EL5UC__AkpFx6kzbnSkeVZA',1541573253096,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:x5jP7EsaX501rWa3wJKQsWaoDs7WLpM0',1541554352649,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:xErMqvwrYCHr39UhTTHaLGiJsXeXyhte',1539347380143,'{\"account\":\"13666666666\",\"id\":7}'),('USER_SID:Xjw_NbMcnwQwyc9PYG6N6fug7-KWP-St',1539931772876,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:xTMW3HbZo1GNI4T7hJ9mQRAkriOg9wON',1535710151331,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:xvrAR8FvXvGjR-9lsVgSmvb2Wto1Jbw6',1539330693007,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:y06_VQ-0a6jH-F2_dQn13rHHftGLwmAo',1539078385075,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:YVplxWmcKTSJPuoF5OMI3K9LL-RV5Pz6',1539677893816,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:zbLpdqyyV-DupUi3IP8S_16AVhdDEk6Q',1535707740374,'{\"user\":\"laoer4\",\"id\":12}'),('USER_SID:ZHAElU6KiI0CRYmWKwWXOQULSNOsFaNo',1539348132967,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:ZJ_tRY915IXRDcO41t8a99V076MNWM0c',1541495590524,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:ZKOG4SBzVUv-52I-vducW5eXXyp4LB4h',1539426745932,'{\"user\":\"xusiwei\",\"id\":1}'),('USER_SID:zwtgpW6DJFaxS5Jdw2QI7r1PGpext6_0',1541573227789,'{\"user\":\"13412345678\",\"id\":23}'),('USER_SID:_1vIgBGd6rjKzei-0T9-fYJN8o2DLES6',1541556661017,'{\"user\":\"laoer4\",\"id\":12}'),('USER_SID:_4MVze7j-AQOwSSIyWhMHFrwqd7A7tfq',1535706598890,'{\"user\":\"laoer4\",\"id\":12}'),('USER_SID:_bu6IRmXWE8MgJqdpSd_3IgwxdEm3Z7z',1539158652985,'{\"user\":\"xusiwei\",\"id\":5}'),('USER_SID:_p_vcxBNNBUt8P5R8VCaffTQPAe7aIdB',1538118900366,'{\"account\":\"13128956796\",\"id\":1}'),('USER_SID:_vIAjI_q3nPWvkzI59aN9hqtTkYlCQHx',1539337200668,'{\"user\":\"xusiwei\",\"id\":5}');

/*Table structure for table `baseinfo` */

DROP TABLE IF EXISTS `baseinfo`;

CREATE TABLE `baseinfo` (
  `id` int(11) DEFAULT NULL,
  `appid` char(36) DEFAULT NULL,
  `secret` char(64) DEFAULT NULL,
  `ip` char(20) DEFAULT NULL,
  `login_duration` int(11) DEFAULT NULL,
  `qcloud_appid` char(64) DEFAULT NULL,
  `session_duration` int(11) DEFAULT NULL,
  `name` char(100) NOT NULL,
  `address` char(100) NOT NULL,
  `email` char(100) NOT NULL,
  `phone` char(20) NOT NULL,
  `logourl` char(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `baseinfo` */

insert  into `baseinfo`(`id`,`appid`,`secret`,`ip`,`login_duration`,`qcloud_appid`,`session_duration`,`name`,`address`,`email`,`phone`,`logourl`) values (1,'wx51323f13bbbbc2a8',NULL,'193.112.9.225',1000,'1256379489',2000,'超群高科技','紫光信息港','312892923@qq.com','13128956796','https://wx.qlogo.cn/mmopen/vi_32/8nicl6hN35hFTZppgwcv3sSMuKV8orfZib6RenxVbMN8daTp2TZiaX3IEBVCNthpp3qYlZMDpfoDjGbaThYNH0cHQ/132');

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `moment` varchar(40) NOT NULL,
  `postid` varchar(40) NOT NULL,
  `avator` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `comment` */

/*Table structure for table `costrecord` */

DROP TABLE IF EXISTS `costrecord`;

CREATE TABLE `costrecord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` char(20) DEFAULT NULL,
  `costmoney` char(20) DEFAULT NULL,
  `costTime` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `costrecord` */

insert  into `costrecord`(`id`,`account`,`costmoney`,`costTime`) values (1,'13420515060','300','2018-10-12 17:32:25'),(2,'13128956796','30','2018-10-12 17:39:36'),(3,'13128956796','50','2018-10-12 17:45:33'),(4,'13128956796','99','2018-10-15 15:11:52'),(5,'15900000000','100','2018-10-18 15:49:11');

/*Table structure for table `members` */

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '会员编号',
  `account` char(20) DEFAULT NULL COMMENT '会员卡号',
  `name` char(10) DEFAULT NULL COMMENT '会员姓名',
  `balance` char(20) DEFAULT NULL COMMENT '余额',
  `integral` char(20) DEFAULT '0' COMMENT '积分',
  `createdTime` varchar(100) DEFAULT NULL COMMENT '开卡时间',
  `notes` text COMMENT '会员备注信息',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `members` */

insert  into `members`(`id`,`account`,`name`,`balance`,`integral`,`createdTime`,`notes`) values (1,'13128956796','徐思伟','301','99','2018-09-27 15:15:00',''),(2,'13420515060','王大锤','520','0','2018-09-27 15:24:54','10.01充值200'),(3,'13172858295','李小明','0','0','2018-10-08 09:38:43','10.08充值200'),(4,'13800000000','阿里','0','0','2018-10-09 18:56:14','呵呵呵'),(5,'15900000000','何静','400','100','2018-10-09 19:02:42',''),(6,'13900000000','小黄','0','0','2018-10-11 20:23:24','店员'),(7,'13666666666','小宋','0','0','2018-10-11 20:29:40','店员'),(8,'15800000000','小林','0','0','2018-10-11 20:37:23','店员'),(9,'13777777777','小明','200','0','2018-10-11 20:40:06','客户充值200'),(10,'13812345678','老刘','300','0','2018-10-18 15:38:18',''),(11,'13778945632','小刘','100','0','2018-10-18 15:40:20',''),(12,'13212345678','老徐❤','300','0','2018-10-29 15:34:36','我❤老徐'),(15,'13412345678','店小妹','0','0','2018-11-06 14:45:56',''),(14,'13488878945','店美女','0','0','2018-11-06 14:42:32',''),(17,'13412454125','店美女二号','0','0','2018-11-06 14:54:18','');

/*Table structure for table `operating` */

DROP TABLE IF EXISTS `operating`;

CREATE TABLE `operating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operator` char(100) DEFAULT NULL,
  `content` varchar(200) DEFAULT NULL,
  `dateTime` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `operating` */

insert  into `operating`(`id`,`operator`,`content`,`dateTime`) values (1,'xusiwei','给13812345678用户开通了会员卡','2018-10-18 15:38:18'),(2,'xusiwei','给13778945632用户开通了会员卡','2018-10-18 15:40:20'),(3,'xusiwei','给13420515060用户充值了520元','2018-10-18 15:45:18'),(4,'xusiwei','给15900000000用户结账了100元','2018-10-18 15:49:11'),(5,'xusiwei','给132123456789用户开通了会员卡','2018-10-29 15:34:36'),(6,'xusiwei','给用户开通了会员卡','2018-11-06 12:12:37'),(7,'xusiwei','给13488878945用户开通了会员卡','2018-11-06 14:42:32'),(8,'xusiwei','给13412345678用户开通了会员卡','2018-11-06 14:45:56'),(9,'xusiwei','给用户开通了会员卡','2018-11-06 14:49:50'),(10,'xusiwei','给13412454125用户开通了会员卡','2018-11-06 14:54:18');

/*Table structure for table `payrecord` */

DROP TABLE IF EXISTS `payrecord`;

CREATE TABLE `payrecord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` char(20) DEFAULT NULL,
  `paymentmoney` char(20) DEFAULT NULL COMMENT '1.现金 2.网付',
  `paymentTime` varchar(100) DEFAULT NULL,
  `paymentMethod` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

/*Data for the table `payrecord` */

insert  into `payrecord`(`id`,`account`,`paymentmoney`,`paymentTime`,`paymentMethod`) values (12,'15900000000','500','2018-10-09 19:02:42','2'),(13,'13128956796','200','2018-10-09 19:08:09','2'),(14,'13420515060','200','2018-10-10 14:45:12','1'),(15,'13420515060','100','2018-10-10 14:46:18','1'),(16,'13128956796','200','2018-10-11 17:47:50','1'),(17,'13777777777','200','2018-10-11 20:40:06','1'),(18,'13128956796','30','2018-10-12 17:08:56','2'),(19,'13128956796','50','2018-10-15 11:00:59','1'),(20,'13812345678','300','2018-10-18 15:38:18','1'),(21,'13778945632','100','2018-10-18 15:40:20','1'),(22,'13420515060','520','2018-10-18 15:45:18','1'),(23,'132123456789','300','2018-10-29 15:34:36','1');

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `md` text NOT NULL,
  `uid` varchar(40) NOT NULL,
  `moment` varchar(100) NOT NULL,
  `comments` varchar(200) NOT NULL DEFAULT '0',
  `pv` varchar(40) NOT NULL DEFAULT '0',
  `avator` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `posts` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '账号',
  `pass` varchar(100) NOT NULL COMMENT '密码',
  `avator` varchar(255) NOT NULL COMMENT '头像',
  `moment` varchar(100) NOT NULL COMMENT '创建日期',
  `level` varchar(100) DEFAULT NULL COMMENT '权限：1管理员2员工3客户)',
  `memberId` int(11) DEFAULT NULL COMMENT '会员ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`pass`,`avator`,`moment`,`level`,`memberId`) values (1,'xusiwei','e10adc3949ba59abbe56e057f20f883e','https://wx.qlogo.cn/mmopen/vi_32/k3mVm3PyTpq5Vrhxk9gd7bB67XoblAv2JeWd1R8aqD3ia9N2qXDRkpKIlZnWbfOkpStN07JY9ASdrxaJVEh0iaOA/132','2018-08-20 16:43:26','1',NULL),(2,'xsw','e10adc3949ba59abbe56e057f20f883e','12syi3e2gd1534840033985.png','2018-08-21 16:27:13',NULL,NULL),(3,'fimer','e10adc3949ba59abbe56e057f20f883e','31yvutzphj1534840095295.png','2018-08-21 16:28:15',NULL,NULL),(4,'1','c81e728d9d4c2f636f067f89cc14862c','','2018-08-21 18:12:17',NULL,NULL),(5,'xusiwei1','e10adc3949ba59abbe56e057f20f883e','https://wx.qlogo.cn/mmopen/vi_32/k3mVm3PyTpq5Vrhxk9gd7bB67XoblAv2JeWd1R8aqD3ia9N2qXDRkpKIlZnWbfOkpStN07JY9ASdrxaJVEh0iaOA/132','2018-08-23 16:27:51',NULL,NULL),(6,'laoxu','e10adc3949ba59abbe56e057f20f883e','','2018-08-23 16:28:48',NULL,NULL),(7,'laoxu1','e10adc3949ba59abbe56e057f20f883e','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-08-23 17:54:33',NULL,NULL),(8,'laoer','670b14728ad9902aecba32e22fa4f6bd','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-08-25 15:15:29',NULL,NULL),(9,'laoer1','670b14728ad9902aecba32e22fa4f6bd','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-08-25 15:16:31',NULL,NULL),(10,'laoer2','670b14728ad9902aecba32e22fa4f6bd','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-08-25 15:19:14',NULL,NULL),(11,'laoer3','670b14728ad9902aecba32e22fa4f6bd','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-08-25 15:19:47',NULL,NULL),(12,'laoer4','670b14728ad9902aecba32e22fa4f6bd','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-08-25 15:22:46',NULL,NULL),(13,'heike','670b14728ad9902aecba32e22fa4f6bd','http://uadmin.51xnb.cn/img/default-ulogo.png','2018-10-11 17:16:44',NULL,NULL),(14,'heike1','e10adc3949ba59abbe56e057f20f883e','','2018-10-11 20:23:24',NULL,NULL),(15,'heike2','e10adc3949ba59abbe56e057f20f883e','','2018-10-11 20:29:40',NULL,NULL),(16,'15800000000','e10adc3949ba59abbe56e057f20f883e','','2018-10-11 20:37:23','2',8),(17,'13777777777','670b14728ad9902aecba32e22fa4f6bd','','2018-10-11 20:40:06','3',9),(18,'13812345678','e10adc3949ba59abbe56e057f20f883e','','2018-10-18 15:38:18','3',10),(19,'13778945632','e10adc3949ba59abbe56e057f20f883e','','2018-10-18 15:40:20','3',11),(20,'13212345678','e10adc3949ba59abbe56e057f20f883e','','2018-10-29 15:34:36','2',12),(23,'13412345678','e10adc3949ba59abbe56e057f20f883e','http://192.168.1.200:3001/images/file_1541486732278.jpg','2018-11-06 14:45:56','2',15),(22,'13488878945','e10adc3949ba59abbe56e057f20f883e','','2018-11-06 14:42:32','2',14),(25,'13412454125','e10adc3949ba59abbe56e057f20f883e','http://192.168.1.200:3001/images/file_1541487229634.jpg','2018-11-06 14:54:18','2',17);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
