Vue.createApp({
    data() {
        return {
            textinput:null,
            name: null,
            message: null,
            textRepeated:null,
            numberInput:null,
            numCheck:null
        }
    },
    methods: {
        RepeatXTimes(textinput,numberInput)
        {
            var numCheck = parseInt(numberInput); // if u input a number and then text after it will just return the number, if u write text and then number it will give a blank number
            if (!textinput)
            {
            this.message = "Write something";
            }
            else if(!numCheck)
            this.message = "Please choose a number " ;
            else if(numCheck<0)
            this.message = "Please choose a positive number ";
            else
            {
                textRepeated="";
                for(i=0;i<numCheck;i++)
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