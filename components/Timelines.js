import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaReact, FaBeer, FaLinux, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiFlutterFill } from 'react-icons/ri'
import { SiTensorflow } from 'react-icons/si'

export default function Timeline() {
  return (
    <div className="mt-8 bg-white dark:bg-gray-900">
      <h1 className="mb-5 text-center text-2xl font-bold">개발 교육</h1>
      <VerticalTimeline className="">
        <VerticalTimelineElement
          className=""
          contentStyle={{ borderTop: '4px solid #035697' }}
          contentArrowStyle={{ borderRight: '7px solid #035697' }}
          date="2021.01"
          iconStyle={{ background: '#035697', color: '#fff' }}
          icon={<FaLinux />}
        >
          <h3 className="font-extrabold">42서울 라피신</h3>
          <h4 className="vertical-timeline-element-subtitle">C/Linux</h4>
          <p>42서울 이노베이션 센터</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: '4px solid #FF8400' }}
          contentArrowStyle={{ borderRight: '7px solid #FF8400' }}
          className="vertical-timeline-element--work"
          date="2021.05"
          iconStyle={{ background: '#FF8400', color: '#fff' }}
          icon={<SiTensorflow />}
        >
          <h3 className="vertical-timeline-element-title">멋쟁이사자 인공지능 부트캠프</h3>
          <h4 className="vertical-timeline-element-subtitle">Python/Tensorflow</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: '4px solid #366C9C' }}
          contentArrowStyle={{ borderRight: '7px solid #366C9C' }}
          className="vertical-timeline-element--work"
          date="2021.08"
          iconStyle={{ background: '#366C9C', color: '#fff' }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">프로그래머스 알고리즘</h3>
          <h4 className="vertical-timeline-element-subtitle">Python</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: '4px solid #66B1F1' }}
          contentArrowStyle={{ borderRight: '7px solid #66B1F1' }}
          className="vertical-timeline-element--work"
          date="2021.09"
          iconStyle={{ background: '#66B1F1', color: '#fff' }}
          icon={<RiFlutterFill />}
        >
          <h3 className="vertical-timeline-element-title">SSAC 크로스 플랫폼 개발자 부트캠프</h3>
          <h4 className="vertical-timeline-element-subtitle">Dart/Flutter</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: '4px solid #5ED3F3' }}
          contentArrowStyle={{ borderRight: '7px solid #5ED3F3' }}
          className="vertical-timeline-element--work"
          date="2022.01"
          iconStyle={{ background: '#5ED3F3', color: '#fff' }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">원티드 프론트엔드 프리온보딩</h3>
          <h4 className="vertical-timeline-element-subtitle">React</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: '4px solid #D2E4B3' }}
          contentArrowStyle={{ borderRight: '7px solid #D2E4B3' }}
          className="vertical-timeline-element--work"
          date="2022.03"
          iconStyle={{ background: '#D2E4B3', color: '#fff' }}
          icon={<FaNodeJs />}
        >
          <h3 className="vertical-timeline-element-title">프로그래머스 노드 백엔드 스터디</h3>
          <h4 className="vertical-timeline-element-subtitle">Nodejs/Typescript</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
