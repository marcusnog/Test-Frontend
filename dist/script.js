new Vue({
    el: "#app",
    data: {
        persons: [{
                "name": "Amanda",
                "email": "test1@example.com",
                "department": "Sales",
                "occupation": "Account executive",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Admin",
                "active": "ativo"
            },
            {
                "name": "Rodrigo",
                "email": "test2@example.com",
                "department": "Marketing",
                "occupation": "Brand Manager",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Editor",
                "active": "ativo"
            },
            {
                "name": "Thiago",
                "email": "test3@example.com",
                "department": "Ads",
                "occupation": "Copywriting",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Admin",
                "active": "ativo"
            },
            {
                "name": "Vanessa",
                "email": "test4@example.com",
                "department": "Social Media",
                "occupation": "Content Manager",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Admin",
                "active": "ativo"
            },
            {
                "name": "Ashley S",
                "email": "test5@example.com",
                "department": "Branding & Marketing",
                "occupation": "Specialist",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Admin",
                "active": "inativo"
            },
            {
                "name": "Kristopher",
                "email": "test5@example.com",
                "department": "Architectural Genie",
                "occupation": "Computer Network Architect",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Admin",
                "active": "ativo"
            },
            {
                "name": "Robinson",
                "email": "test5@example.com",
                "department": "Branding",
                "occupation": "Trainee",
                "profile_image": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role": "Admin",
                "active": "ativo"
            }
        ],
        input: {
            name: "",
            email: "",
            department: "",
            occupation: "",

        },
        inputError: false,
        editIndex: 0,
        editInput: {
            lname: "",
            fname: "",
            age: 0,
            job: "",
            address: ""
        },
        editError: false
    },
    methods: {
        //function to add data to table
        add: function() {
            if (this.input.name == "" ||
                this.input.email == "" ||
                this.input.departament == "" ||
                this.input.occupation == "") {
                this.inputError = true;
                return true;
            }
            this.inputError = false;
            this.persons.push({
                name: this.input.name,
                email: this.input.email,
                department: this.input.department,
                occupation: this.input.occupation,

            });

            for (var key in this.input) {
                this.input[key] = "";
            }
            this.$refs.lname.focus();
        },
        edit: function(index) {
            this.editInput.lname = this.persons[index].lname;
            this.editInput.fname = this.persons[index].fname;
            this.editInput.age = this.persons[index].age;
            this.editInput.job = this.persons[index].job;
            this.editInput.address = this.persons[index].address;

            this.editIndex = index;
            this.editError = false;
            $(".modal").modal();
        },
        update: function() {
            if (this.editInput.lname == "" ||
                this.editInput.fname == "" ||
                this.editInput.age <= 0 ||
                this.editInput.job == "" ||
                this.editInput.address == "") {
                this.editError = true;
                return true;
            }
            this.editError = false;
            this.persons.splice(this.editIndex, 1);
            this.persons.push({
                lname: this.editInput.lname,
                fname: this.editInput.fname,
                age: this.editInput.age,
                job: this.editInput.job,
                address: this.editInput.address
            });
            for (var key in this.editInput) {
                this.editInput[key] = "";
            }
            $(".modal").modal("hide");
        },
        deletePerson: function(index) {
            this.persons.splice(index, 1);
        }
    }
});