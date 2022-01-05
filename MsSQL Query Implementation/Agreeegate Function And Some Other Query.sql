--UPDATE Student SET  Age = 31,Marks=520 WHERE Id = 1;  
--INSERT INTO Student VALUES(4,'Ravi','male',35,300),(7,'Yasin','male',25,450)
--ALTER TABLE Student ADD Phone_number VARCHAR(20)
--UPDATE Student SET Phone_number=4444444444 
--ALTER TABLE Student DROP COLUMN  Phone_number 
--ALTER TABLE Student DROP PK_Id  

--MIN/MAX/AVG/COUNT/SUM
--SELECT MIN(Marks) AS "Minimum Quantity" FROM Student;  
/*SELECT Name, Gender, Age  
FROM Student  
WHERE Marks = (  
SELECT MIN(Marks)    
FROM Student);*/

/*SELECT Age, MIN(Marks) AS "Minimum Marks"   
FROM Student 
GROUP BY Age   */

/*SELECT *
FROM Student 
WHERE  name IN ('utsav','ravi'); */ 

/*SELECT *  
FROM Student  
WHERE Age IS NULL;  */
