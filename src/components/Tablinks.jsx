function Tablinks({isActive, activeTabLinks}) {
    
    return( 
    <div className="tabs">
        <ul className='tab-menu'>
            <li className={isActive === 0 ? 'active-tab' : null} value="0"  onClick={activeTabLinks}>All Tasks</li>
            <li className={isActive === 1 ? 'active-tab' : null} value="1"  onClick={activeTabLinks} >Completed Tasks</li>
            <li className={isActive === 2 ? 'active-tab' : null} value="2"  onClick={activeTabLinks}>Incompleted Tasks</li>
        </ul>
    </div>
    )
}

export default Tablinks;