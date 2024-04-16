import React from 'react'
import styles from "./header.module.scss"
import logo from "../../assets/images/logo.png"
import { sidebarData } from '../../App/routes/routesData'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className={styles.mainContainer}>
              <img src={logo} className={styles.logoContainer} alt="error display to logo" />
              <div className={styles.navContainer}>
              <div className={styles.navbarContainer}>
            {sidebarData?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <NavLink
                    to={item?.path}
                    state={{ name: item?.header }}
                    className={(isActive)=> isActive ? styles.active : styles.inActive}
                  >
                    <div className={styles.navbarContent}>
                      {item?.name}
                    </div>
                  </NavLink>
                </React.Fragment>
              );
            })}
          </div>
          
            
        </div>
                  
      </div>
    </>
  )
}

export default Header
