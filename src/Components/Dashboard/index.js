import {Component} from "react"

import {
    FaRegCalendar,
    FaRegSun,
    FaRegUserCircle,
    FaTags,
    FaRegBell
  } from 'react-icons/fa'

  import {RiArrowRightSLine} from "react-icons/ri"

  import {BsSearch,BsChevronDown} from "react-icons/bs"
  
  import { FiPieChart } from 'react-icons/fi'

import CardItem from "../CardItem"
import Graph from "../Graph"
import Piechart from "../PieChart"
  

import "./index.css"

const dashboardCardData = [
    {
        id: 1,
        text: 'Total Revenues',
        value: '$2,344,450',
        color: '#DDEFE0',
        icon:
          "https://res.cloudinary.com/dau2bi3nn/image/upload/v1688194090/Vector_xr3pyv.png",
        
      },
      {
        id: 2,
        text: 'Total Transactions',
        value: '4,450',
        color: '#F4ECDD',
        icon:
          "https://res.cloudinary.com/dau2bi3nn/image/upload/v1688194149/total_transactions_icon_uy0lxd.png",
        
      },
      {
        id: 3,
        text: 'Total Likes',
        value: '9,450',
        color: '#EFDADA',
        icon:
          "https://res.cloudinary.com/dau2bi3nn/image/upload/v1688194209/Vector_1_bl8onk.png",
        
      },
      {
        id: 4,
        text: 'Total users',
        value: '1,450',
        color: '#DEE0EF',
        icon:
          "https://res.cloudinary.com/dau2bi3nn/image/upload/v1688194253/Vector_2_m0zibk.png",
        
      },

]

const GraphData = [
    {name: 'Week 1', Guest: 0, User: 200},
    {name: 'Week 2', Guest: 500, User: 450},
    {name: 'Week 3', Guest: 350, User: 470},
    {name: 'Week 4', Guest: 140, User: 340},
    {name: 'Week 5', Guest: 370, User: 140},
  ]
  







class Dashboard extends Component{




    renderNavigationBar = () => {
        return(
            <div className="side_bar_container">
                <div className="side_bar_content">
                <div className="side_bar_upper_section">
                    <h1 className="side_bar_heading">
                        Board.
                    </h1>
                    <ul className="items_list">
                        <li className="list_item">
                        <FiPieChart className="icon" /> Dashboard
                        </li>
                        <li className="list_item">
                            <FaTags className="icon" />Transactions
                        </li>
                        <li className="list_item">
                            <FaRegCalendar className="icon" />Schedule
                        </li>
                        <li className="list_item">
                            <FaRegUserCircle className="icon" /> Users
                        </li>
                        <li className="list_item">
                            <FaRegSun className="icon" />Settings
                        </li>
                    </ul>
                 </div>
                    <ul className="items_list">
                        <li className="list_item">Help</li>
                        <li className="list_item">Contact us</li>

                    </ul>
                </div>
            </div>
        )
    }

    renderDashboard = () => {
        return(
            <div className="right_side_container">
                 <div className="dashboard_search_container">
                    <h1 className="dashboard_search_container_heading">
                        Dashboard
                    </h1>
                <div className="search_bell_profile_container">
                    <div className="search_container">
                    <input className="search_feild" type="search" placeholder="Search..." />
                    <BsSearch />
                    </div>
                    <FaRegBell className="bell_icon" />
                    <img alt="profile" src="https://res.cloudinary.com/dau2bi3nn/image/upload/v1688197604/Mask_Group_pngji6.png" className="profile_pic" />
                    </div>
                  </div>

                  <ul className="cards_list">
                    {dashboardCardData.map(eachcard => (
                        <CardItem cardDetails={eachcard} key={eachcard.id} />

                    ))}
                  </ul>

                  <div className="graph_container">
                     <h1 className="right_side_cards_headings">Activities</h1>
                     <p className="graph_date">May - June 2021 <BsChevronDown /></p>
                     <Graph GraphDataDetails={GraphData} />
                  </div>

                <div className="right_side_card_items_container">
                    <div className="right_side_card_container">
                    <div className="heading_date_container">
                            <h1 className="right_side_cards_headings">Piechart</h1>
                            <p className="graph_date">May - June 2021<BsChevronDown/></p>    
                        </div>
                    <Piechart />
                    </div>

                    <div className="right_side_card_container">
                     <div className="heading_date_container">
                        <h1 className="right_side_cards_headings">Today's Schedule</h1>
                        <p className="see_all_text">See All <RiArrowRightSLine /></p>
                     </div>
                     <div className="schedule_container">
                        <h1 className="schedule_name">Meeting with suppliers from Kuta Bali</h1>
                        <p className="schedule_time_place">14.00-15.00</p>
                        <p className="schedule_time_place">at Sunset Road, Kuta, Bali </p>
                     </div>

                     <div className="second_schedule">
                     <h1 className="schedule_name">Check operation at Giga Factory 1</h1>
                        <p className="schedule_time_place">18.00-20.00</p>
                        <p className="schedule_time_place">at Central Jakarta </p>
                        
                     </div>

                    </div>


                </div>

                  
            </div>
        )
    }



    render(){
        return(
            <div className="dashboard_container">
            {this.renderNavigationBar()}
            {this.renderDashboard()}
        </div>


        )
        
    }
}
export default Dashboard



