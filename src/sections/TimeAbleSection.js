import React, { Component } from 'react'

export class TimeAbleSection extends Component {
    state={
        times:[
            "10.00",
            "14.00",
            "16.00",
            "18.00",
            "20.00",
        ],
       
        days:[
            {
                id:1,
                title:"GYM",
                time:"10.00 - 11.00",
                user:"John Smith",
                index:1,
                row:0
            },
            {
                id:2,
                title:"YOGA",
                time:"10.00 - 12.00",
                user:"John Smith",
                index:3,
                row:0
            },
            {
                id:3,
                title:"BODY",
                time:"10.00 - 12.00",
                user:"John Smith",
                index:5,
                row:0
            },
            {
                id:4,
                title:"CARDIO",
                time:"10.00 - 11.00",
                user:"John Smith",
                index:7,
                row:0
            },
            {
                id:5,
                title:"RUNNING",
                time:"14.00 - 16.00",
                user:"John Smith",
                index:2,
                row:1
            },
            {
                id:6,
                title:"BOX",
                time:"14.00 - 16.00",
                user:"John Smith",
                index:4,
                row:1
            },
            {
                id:1,
                title:"GYM",
                time:"14.00 - 16.00",
                user:"John Smith",
                index:6,
                row:1
            },
            {
                id:4,
                title:"CARDIO",
                time:"16.00 - 18.00",
                user:"John Smith",
                index:1,
                row:2
            },
            {
                id:1,
                title:"GYM",
                time:"16.00 - 18.00",
                user:"John Smith",
                index:3,
                row:2
            },
            {
                id:2,
                title:"YOGA",
                time:"16.00 - 18.00",
                user:"John Smith",
                index:5,
                row:2
            },
            {
                id:1,
                title:"YOGA",
                time:"16.00 - 18.00",
                user:"John Smith",
                index:7,
                row:2
            },
            {
                id:5,
                title:"BOX",
                time:"18.00 - 22.00",
                user:"John Smith",
                index:1,
                row:3
            },
            {
                id:3,
                title:"BODY",
                time:"18.00 - 22.00",
                user:"John Smith",
                index:2,
                row:3
            },
            {
                id:7,
                title:"CROSSFIT",
                time:"18.00 - 22.00",
                user:"John Smith",
                index:4,
                row:3
            },
            {
                id:4,
                title:"CARDIO",
                time:"18.00 - 22.00",
                user:"John Smith",
                index:6,
                row:3
            },
            {
                id:1,
                title:"GYM",
                time:"20.00 - 12.00",
                user:"John Smith",
                index:2,
                row:4
            },
            {
                id:3,
                title:"BODY",
                time:"20.00 - 12.00",
                user:"John Smith",
                index:3,
                row:4
            },
            {
                id:4,
                title:"CARDIO",
                time:"20.00 - 12.00",
                user:"John Smith",
                index:5,
                row:4
            },
            {
                id:7,
                title:"CROSSFIT",
                time:"20.00 - 12.00",
                user:"John Smith",
                index:7,
                row:4
            },

        ],
        selected:""
    }
    getDays=()=>{
        let arr = [];
        for(let i = 1; i <=7; i++){
            arr.push(i)
        }
        return arr;
    }
    getData=(row, item, values)=>{
        return{
            title: values?.find(x=> x.row == row && x.index == item)?.title,
            time: values?.find(x=> x.row == row && x.index == item)?.time,
            user: values?.find(x=> x.row == row && x.index == item)?.user,
            id: values?.find(x=> x.row == row && x.index == item)?.id,
        }
    }
  render() {
    const {days, times, selected} = this.state;
    return (
        <div className='container pt-[100px] '>
            <h2 className='text-[#111111] text-center text-[40px] font-[600] uppercase'>Class Timetable</h2>
            <div className='flex justify-center gap-[48px] mt-[40px] flex-wrap max-[600px]:gap-[15px]'>
                <button onClick={()=>this.setState({selected:""})} className={`text-[16px]  ${selected == ""?"text-[#f15d44]":"text-[#111111]"} font-[600] uppercase hover:text-[#f15d44]`}>All class</button>
                <button onClick={()=>this.setState({selected:1})} className={`text-[16px]  ${selected == 1?"text-[#f15d44]":"text-[#111111]"} font-[600] uppercase hover:text-[#f15d44]`}>Gym</button>
                <button onClick={()=>this.setState({selected:7})} className={`text-[16px]  ${selected == 7?"text-[#f15d44]":"text-[#111111]"} font-[600] uppercase hover:text-[#f15d44]`}>Crossfit</button>
                <button onClick={()=>this.setState({selected:4})} className={`text-[16px]  ${selected == 4?"text-[#f15d44]":"text-[#111111]"} font-[600] uppercase hover:text-[#f15d44]`}>Cardio</button>
                <button onClick={()=>this.setState({selected:3})} className={`text-[16px]  ${selected == 3?"text-[#f15d44]":"text-[#111111]"} font-[600] uppercase hover:text-[#f15d44]`}>Body</button>
                <button onClick={()=>this.setState({selected:2})} className={`text-[16px]  ${selected == 2?"text-[#f15d44]":"text-[#111111]"} font-[600] uppercase hover:text-[#f15d44]`}>Yoga</button>
            </div>
            <div className='mt-[40px] overflow-auto'>
                <ul className='grid grid-cols-8 p-[25px_0] bg-[#f0f0f0] min-w-[900px]'>
                    <li></li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Monday</li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Tuesday</li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Wednesday</li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Thursday</li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Friday</li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Saturday</li>
                    <li className='font-[600] text-[16px] uppercase text-center'>Sunday</li>
                </ul>
                <div className='border min-w-[900px]'>
                    {
                        times?.map((data, i)=>{
                            return(
                                <div className='grid grid-cols-8 border-b' key={i}>
                                    <div className='w-full h-[106px] flex justify-center items-center flex-col'>
                                        <span className='text-[16px] font-[600]'>{data}</span>
                                    </div>
                                    {
                                        this.getDays()
                                        .map((item, j)=>{
                                            if(selected =="" || this.getData(i, item, days)?.id == selected){
                                                return(
                                                    <div className={`w-full cursor-pointer border-l h-[106px] flex justify-center items-center flex-col ${this.getData(i, item, days)?.title? "group  hover_bg ":null}`} key={j}>
                                                        <h4 className={`text-[#f15d44] text-[16px] font-[600] group-hover:text-white`}>{this.getData(i, item, days)?.title}</h4>
                                                        <p className={'text-[14px] text-[#111111] font-[500] group-hover:text-white'}>{this.getData(i, item, days)?.time}</p>
                                                        <span className={`text-[#6b6b6b] text-[14px] font-[300] group-hover:text-white`}>{this.getData(i, item, days)?.user}</span>
                                                    </div>
                                                )
                                            }else{
                                                return(
                                                    <div className='w-full cursor-pointer border-l h-[106px]'></div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
      </div>
    )
  }
}

export default TimeAbleSection