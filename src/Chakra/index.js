import React, { useEffect, useState, useRef } from 'react'
import styles from './style.scss';

const Chakra = () => {
    const grid1 = [
        { id: `chakra1g1`, name: 'Creative Head', img: 'assets/images/chakra1_creativeHead', rotation: `rotate(1deg)`, icon: 'fa fa-paint-brush' },
        { id: `chakra1g2`, name: 'UX Researcher', img: 'assets/images/chakra1_UXResearcher', rotation: 'rotate(90deg)', icon: "fa fa-search" },
        { id: `chakra1g3`, name: 'Frontend Developer', img: 'assets/images/chakra1_FrontendDeveloper', rotation: 'rotate(30deg)', icon: 'fa fa-code' },
        { id: `chakra1g4`, name: 'Visual Designer', img: 'assets/images/chakra1_VisualDesigner', rotation: 'rotate(420deg)', icon: 'fa fa-eyedropper' },
        { id: `chakra1g5`, name: 'Backend Lead', img: 'assets/images/chakra1_BackendLead', rotation: 'rotate(5deg)', icon: 'fa fa-stack-exchange' },
        { id: `chakra1g6`, name: 'ios Developer', img: 'assets/images/chakra1_iosDeveloper', rotation: 'rotate(6deg)', icon: 'fa fa-apple' },
        { id: `chakra1g7`, name: 'Motion Designer', img: 'assets/images/chakra1_MotionDesigner', rotation: 'rotate(7deg)', icon: 'fa fa-film' },
        { id: `chakra1g8`, name: 'Ui Ux Designer', img: 'assets/images/chakra1_UiUxDesigner', rotation: 'rotate(8deg)', icon: 'fa fa-delicious' },
        // { name: 'Senior Project Manager', img: 'assets/images/chakra1_SeniorProjectManager', rotation: '360' },
    ]
    const grid2 = [
        { id: `chakra2g4`, name: 'Visual Designer', img: 'assets/images/chakra1_VisualDesigner', rotation: 'rotate(420deg)', icon: 'fa fa-eyedropper' },
        { id: `chakra2g5`, name: 'Backend Lead', img: 'assets/images/chakra1_BackendLead', rotation: 'rotate(5deg)', icon: 'fa fa-stack-exchange' },
        { id: `chakra2g6`, name: 'ios Developer', img: 'assets/images/chakra1_iosDeveloper', rotation: 'rotate(6deg)', icon: 'fa fa-apple' },
        { id: `chakra2g7`, name: 'Motion Designer', img: 'assets/images/chakra1_MotionDesigner', rotation: 'rotate(7deg)', icon: 'fa fa-film' },
        { id: `chakra2g8`, name: 'Ui Ux Designer', img: 'assets/images/chakra1_UiUxDesigner', rotation: 'rotate(8deg)', icon: 'fa fa-delicious' },
        { id: `chakra2g2`, name: 'UX Researcher', img: 'assets/images/chakra1_UXResearcher', rotation: 'rotate(20deg)', icon: 'fa fa-search' },
        { id: `chakra2g1`, name: 'Creative Head', img: 'assets/images/chakra1_creativeHead', rotation: `rotate(1deg)`, icon: 'fa fa-paint-brush' },
        { id: `chakra2g3`, name: 'Frontend Developer', img: 'assets/images/chakra1_FrontendDeveloper', rotation: 'rotate(30deg)', icon: 'fa fa-code' },
        // { name: 'Senior Project Manager', img: 'assets/images/chakra1_SeniorProjectManager', rotation: '360' },
    ]
    // const grid3 = [
    //     { id: `chakra3g8`, name: 'Ui Ux Designer', img: 'assets/images/chakra1_UiUxDesigner', rotation: 'rotate(8deg)', icon: 'fa fa-delicious' },
    //     { id: `chakra3g2`, name: 'UX Researcher', img: 'assets/images/chakra1_UXResearcher', rotation: 'rotate(20deg)', icon: 'fa fa-search' },
    //     { id: `chakra3g1`, name: 'Creative Head', img: 'assets/images/chakra1_creativeHead', rotation: `rotate(1deg)`, icon: 'fa fa-paint-brush' },
    //     { id: `chakra3g3`, name: 'Frontend Developer', img: 'assets/images/chakra1_FrontendDeveloper', rotation: 'rotate(30deg)', icon: 'fa fa-code' },
    //     { id: `chakra3g4`, name: 'Visual Designer', img: 'assets/images/chakra1_VisualDesigner', rotation: 'rotate(420deg)', icon: 'fa fa-eyedropper' },
    //     { id: `chakra3g5`, name: 'Backend Lead', img: 'assets/images/chakra1_BackendLead', rotation: 'rotate(5deg)', icon: 'fa fa-stack-exchange' },
    //     { id: `chakra3g6`, name: 'ios Developer', img: 'assets/images/chakra1_iosDeveloper', rotation: 'rotate(6deg)', icon: 'fa fa-apple' },
    //     { id: `chakra3g7`, name: 'Motion Designer', img: 'assets/images/chakra1_MotionDesigner', rotation: 'rotate(7deg)', icon: 'fa fa-film' },
    //     // { name: 'Senior Project Manager', img: 'assets/images/chakra1_SeniorProjectManager', rotation: '360' },
    // ]
    const chakraRef2 = useRef();
    const chakraRef1 = useRef();
    const chakraRef3 = useRef();

    useEffect(() => {
        window.addEventListener('scroll', event => {
            requestAnimationFrame(() => {
                const rotation = window.scrollY;
                chakraRef1.current.style.transform = `rotate(${rotation}deg)`;
                chakraRef2.current.style.transform = `rotate(-${rotation}deg)`;
                chakraRef3.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, [])

    return (
        <div className='rotatingChakra' style={styles.rotatingChakra}>
            <div className="chakra-content" >
                <div className="grid1" ref={chakraRef1}>
                    {
                        grid1.map((g1, key) =>
                            < div
                                className="rotationGrids"
                                id={g1.id} key={g1.id}
                                style={styles.grid1}
                            >
                                {g1.name}<br /><br /> <i class={g1.icon} aria-hidden="true"></i>

                            </div>


                        )
                    }
                </div>
                <div className="grid2" ref={chakraRef2}>
                    {
                        grid2.map((g2, key) =>
                            <div
                                className="rotationGrids"
                                id={g2.id} key={g2.id}
                                style={{ transform: g2.rotation }, styles.grid2}
                            >
                                {g2.name}<br /><br /> <i class={g2.icon} aria-hidden="true"></i>
                            </div>,

                        )
                    }
                </div>
                <div className="grid3" ref={chakraRef3}>
                    {
                        grid2.map((g3, key) =>
                            <div
                                className="rotationGrids"
                                id={g3.id} key={g3.id}
                                style={{ transform: g3.rotation }, styles.grid3}
                            >
                                {/* {g3.name} */}
                            </div>,

                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Chakra
