import React from 'react';

interface IProps extends FCProps {

}

const Arrow = ({
   className,
}: IProps) => {
    return <svg viewBox="0 0 1025 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" width="15" height="15">
        <path d="M708.383253 957.296943c-6.289728 0-12.576383-2.398963-17.376358-7.19689l-392.936471-392.937495c-25.550034-25.550034-25.550034-67.121826 0-92.671861 0.12389-0.12389 0.249828-0.246756 0.375766-0.367575l407.301582-390.221127c9.799606-9.388005 25.355496-9.056266 34.744525 0.744365s9.056266 25.355496-0.744365 34.744525L332.676724 499.389828c-3.002032 3.076775-4.652535 7.130337-4.652535 11.436799 0 4.375062 1.704769 8.490057 4.798951 11.583215l392.936471 392.936471c9.595853 9.596877 9.595853 25.154815 0 34.751692C720.961684 954.896956 714.670933 957.296943 708.383253 957.296943z" fill="#fff"/>
    </svg>;
};
const Locked = ({
   className,
}: IProps) => {
    return <svg viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        <path
            d="M511.587096 296.287053c-183.253674 0-332.335061 149.083433-332.335061 332.338131 0 183.250604 149.081387 332.337107 332.335061 332.337107 183.254697 0 332.334038-149.08548 332.334038-332.337107C843.92011 445.370487 694.841793 296.287053 511.587096 296.287053L511.587096 296.287053zM511.587096 882.763278c-140.132574 0-254.139118-114.00859-254.139118-254.139118 0-140.124388 114.006544-254.143211 254.139118-254.143211 140.129504 0 254.139118 114.019847 254.139118 254.143211C765.72519 768.754688 651.715577 882.763278 511.587096 882.763278L511.587096 882.763278zM511.587096 882.763278"
            fill="#ffe7ab"/>
        <path
            d="M472.486566 554.457997l78.19799 0 0 184.131671-78.19799 0L472.486566 554.457997 472.486566 554.457997zM472.486566 554.457997"
            fill="#ffe7ab"/>
        <path
            d="M394.290623 399.077138 394.290623 240.025679c0-53.892421 43.811832-97.747231 97.654111-97.747231l39.306214 0c53.843302 0 97.632621 43.85481 97.632621 97.747231L628.883569 397.373333c28.03245 10.378371 54.290487 24.433482 78.193897 41.577954L707.077465 240.025679c0-97.000218-78.883605-175.943175-175.826518-175.943175l-39.306214 0c-96.953146 0-175.850054 78.919421-175.850054 175.943175l0 202.190979C339.920318 424.521646 366.189611 409.946696 394.290623 399.077138z"
            fill="#ffe7ab"/>
    </svg>;
};

export default {
    Arrow,
    Locked
};
