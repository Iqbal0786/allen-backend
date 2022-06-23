const mongoose=require("mongoose")

const examinationSchema= new mongoose.Schema({
    examination:{
       NEET:{
         subject:{
            physics:{
                easy:[{
                    question:{type:String,required:true},
                    answers:[{type:String, required:true}],
                    correctIndex:{type:Number,required:true}
                }],
                medium:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }],
                advance:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }]
            },
            chemistry:{
                easy:[{
                    question:{type:String,required:true},
                    answers:[{type:String, required:true}],
                    correctIndex:{type:Number,required:true}
                }],
                medium:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }],
                advance:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }]
            }
         }
       },
       JEE_MAIN:{
        subject:{
            physics:{
                easy:[{
                    question:{type:String,required:true},
                    answers:[{type:String, required:true}],
                    correctIndex:{type:Number,required:true}
                }],
                medium:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }],
                advance:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }]
            },
            chemistry:{
                easy:[{
                    question:{type:String,required:true},
                    answers:[{type:String, required:true}],
                    correctIndex:{type:Number,required:true}
                }],
                medium:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }],
                advance:[{
                    question:{type:String,required:false},
                    answers:[{type:String, required:false}],
                    correctIndex:{type:Number,required:false}
                }]
            }
         }
    }
     }
},{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model("examinations",examinationSchema);