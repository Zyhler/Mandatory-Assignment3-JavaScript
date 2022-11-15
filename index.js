Vue.createApp({
    data() {
        return {
            textinput:null,
            name: null,
            message: null,
            textRepeated:null,
            Numberinput:null
        }
    },
    methods: {
        RepeatXTimes(textinput,Numberinput)
        {
            if (!textinput)
            this.message = "Write something";
            else if(Numberinput<0 || !Numberinput)
            this.message = "Please choose a positive number";
            else
            {
                textRepeated="";
                for(i=0;i<Numberinput;i++)
                {
                    textRepeated += textinput;
                }

                this.message = textRepeated;
            }
        },
        RepeatThreeTimes(textinput) {
            if (!textinput)
            this.message = "Write something";
            else 
            {
                textRepeated="";
                for(i=0;i<3;i++)
                {
                    textRepeated += textinput;
                }

                this.message = textRepeated;
            }                     
             
        }
    }
}).mount("#app")