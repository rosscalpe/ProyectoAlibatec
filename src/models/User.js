fs = require('fs');
const path = require ('path');
const uuid = require('uuid');

const userFilepath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilepath, 'utf-8'))

const User = {

    getData: function (){ 
        return users;
    },

    writeFile(contents){
        let fileContents = JSON.stringify(contents, null, 2);
        fs.writeFileSync(userFilepath, fileContents)
    },
    findByPK: function (id) {
        let allUser = this.getData(); 
        let userFound = allUser.find (oneUser => oneUser.id=== id); 
        return userFound; 
    },
    findByField: function (field, text){
        let allUser = this.getData();
        let userFound = allUser.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    create: function (userData) {
        let allUser = this.getData(); 
        let newUser = {
            id: uuid.v4(),
            ... userData
        }
        allUser.push (newUser) 
        fs.writeFileSync(userFilepath, JSON.stringify (allUser, null, 2), {encoding: 'utf-8'}); 
        return newUser; 
    },
    editUser: function (id, userData) {
        let allUser = this.getData();
        let userFound = this.findByPK(id);
        let userFoundIndex = allUser.indexOf(userFound);
        let editedUser = {
            id: id,
            ...userData
        }
        allUser[userFoundIndex] = editedUser;
        this.writeFile(allUser);
        return editedUser;
    },
    deleteUser: function(id){
        let allUser = this.getData();
        let userFoundIndex = allUser.findIndex(oneUser => oneUser.id === id);
        allUser.splice(userFoundIndex, 1);
        this.writeFile(allUser);
        return true;
    }
}
module.exports = User;