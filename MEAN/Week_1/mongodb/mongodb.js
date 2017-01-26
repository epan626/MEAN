// Q1: Create 5 students with the appropriate info.
db.students.insert({name: 'Eric', home_state: 'CA', lucky_number: 26, birthday: {month: 2, day: 26, year: 1991}})
db.students.insert({name: 'Charlie', home_state: 'CA', lucky_number: 26, birthday: {month: 3, day: 21, year: 1991}})
db.students.insert({name: 'Tiffany', home_state: 'CA', lucky_number: 2, birthday: {month: 12, day: 12, year: 1990}})
db.students.insert({name: 'Judy', home_state: 'CA', lucky_number: 6, birthday: {month: 1, day: 18, year: 1960}})
db.students.insert({name: 'Johnson', home_state: 'WA', lucky_number: 11, birthday: {month: 1, day: 11, year: 1991}})
// Q2: Get all students.
db.students.find().pretty()
//Q3 Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({$or: [{home_state: ‘WA’},{home_state: ‘CA’}])
//Q4: Get all students whose lucky number is:
//Q4.1: greater than 3
//Q4.2: less than or equal to 10
//Q4.3: between 1 and 9 (inclusive)
db.students.find({lucky_number: {$gt: 3}}).pretty()
db.students.find({lucky_number: {$lte: 10}}).pretty()
db.students.find({lucky_number: {$gte:1,$lte:9}}).pretty()
//Q5: Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({}, {$set: {interest:['coding', 'brunch', 'Mongodb']}},{upsert:false, multi:true});
//Q6: Add some unique interests for each particular students into each of their interest arrays.
db.students.update({_id: ObjectId("5877db092b8d9672ce6ab3df")}, {$push:{interest: 'dota2'}})
db.students.update({_id: ObjectId("5877dbd72b8d9672ce6ab3e0")}, {$push:{interest: 'reading'}})
db.students.update({_id: ObjectId("5877dbf62b8d9672ce6ab3e1")}, {$push:{interest: 'writing'}})
db.students.update({_id: ObjectId("5877dbfa2b8d9672ce6ab3e2")}, {$push:{interest: 'cooking'}})
db.students.update({_id: ObjectId("5877dbff2b8d9672ce6ab3e3")}, {$push:{interest: 'random shit'}})
db.students.update({_id: ObjectId("5877dbff2b8d9672ce6ab3e3")}, {$push:{interest: 'taxes'}})
//Q7: Add the interest 'taxes' into someone's interest array.
db.students.update({name: 'Johnson'}, {$push:{interest:'taxes'}})
//Q8: Remove the 'taxes' interest you just added.
db.students.update({interest:'taxes'}, {$pull: {interest: 'taxes'}})
//Q9: Remove all students who are from California (or Washington).
db.students.remove({home_state: 'WA'})
//Q10: Remove a user by name.
db.students.remove({name: 'Johnson'}, {justOne:true})
//Q11: Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt:5}},{justOne:true});
//Q11:Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.update({}, {$set: {number_of_belts: 0}}, {upsert:false, multi:true});
//Q12: Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.update({home_state: 'WA'}, {$inc: {number_of_belts: 1}}, {upsert:false, multi:true});
//Q13: Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({}, {$rename: {'number_of_belts': 'belts_earned'}})
//Q14: Remove the 'lucky_number' field.
db.students.update({}, {$unset: {lucky_number: ""}}, {upsert:false, multi:true});
//Q15: Add a 'updated_on' field, and set the value as the current date.
db.students.update({}, {$currentDate: {updated_on: Date()}}, {upsert:false, multi:true});

// you dont need upsert //
