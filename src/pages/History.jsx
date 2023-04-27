import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const timelineItems = [
    { year: 2015, month: 'May 01', content: 'ABJA CONSULTING SERVICES', image: 'http://www.abjacs.com/wp-content/uploads/2016/02/abja-logo.png' },
    { year: 2012, month: 'Oct 01', content: 'SPANVI TECHNOLOGIES', image: 'http://www.abjacs.com/wp-content/uploads/2016/02/Spanvi-logo.jpg' },
    { year: 2009, month: 'Apr 01', content: 'EXORA SOFTWARE SOLUTIONS', image: 'http://www.abjacs.com/wp-content/uploads/2016/02/unnamed.jpg' },
    { year: 2005, month: 'Aug 01', content: 'EXORA CONSULTANTS', image: 'http://www.abjacs.com/wp-content/uploads/2016/02/unnamed.jpg' },
  ];

export default function History() {

  return (
    <VerticalTimeline lineColor='#777777'>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 01"
            dateClassName='may'
            iconStyle={{ background: '#414A54', color: '#fff',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center' }}
            icon='2015'
            contentStyle={{color:'white'}}
        >
            <h4 style={{background:'#1b949e url(http://www.abjacs.com/wp-content/plugins/cool-timeline/images/dust-bg.png)' ,height:'50px' , display:'flex', justifyContent:'center', alignItems:'center',fontSize:"1.2em",textShadow:"black 1px 1px 3px"}} className="vertical-timeline-element-subtitle">ABJA CONSULTING SERVICES</h4>
            <img src="http://www.abjacs.com/wp-content/uploads/2016/02/abja-logo.png" alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 01"
            dateClassName='oct'
            iconStyle={{ background: '#414A54', color: '#fff',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center' }}
            icon='2012'
            contentStyle={{color:'white'}}
        >
            <h4 style={{background:'#f58636 url(http://www.abjacs.com/wp-content/plugins/cool-timeline/images/dust-bg.png)' , height:'50px' , display:'flex', justifyContent:'center', alignItems:'center',textShadow:"black 1px 1px 3px"}} className="vertical-timeline-element-subtitle">SPANVI TECHNOLOGIES</h4>
            <img src="http://www.abjacs.com/wp-content/uploads/2016/02/Spanvi-logo.jpg" alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 01"
            dateClassName='apr'
            iconStyle={{ background: '#414A54', color: '#fff',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center' }}
            icon='2009'
            contentStyle={{color:'white'}}
        >
            <h4 style={{background:'#1b949e url(http://www.abjacs.com/wp-content/plugins/cool-timeline/images/dust-bg.png)' , height:'50px' , display:'flex', justifyContent:'center', alignItems:'center',fontSize:"1.2em",textShadow:"black 1px 1px 3px"}} className="vertical-timeline-element-subtitle">EXORA SOFTWARE SOLUTIONS</h4>
            <img src="http://www.abjacs.com/wp-content/uploads/2016/02/unnamed.jpg" alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 01"
            dateClassName='aug'
            iconStyle={{ background: '#414A54', color: '#fff',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center' }}
            icon='2005'
            contentStyle={{color:'white'}}
        >
            <h4 style={{background:'#f58636 url(http://www.abjacs.com/wp-content/plugins/cool-timeline/images/dust-bg.png)' , height:'50px' , display:'flex', justifyContent:'center', alignItems:'center',textShadow:"black 1px 1px 3px"}} className="vertical-timeline-element-subtitle">EXORA CONSULTANTS</h4>
            <img src="http://www.abjacs.com/wp-content/uploads/2016/02/unnamed.jpg" alt="" />
        </VerticalTimelineElement>
        
    </VerticalTimeline>
  )
}
