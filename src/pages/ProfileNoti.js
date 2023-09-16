import { useCallback } from "react";
import styles from "./ProfileNoti.module.css";

const ProfileNoti = () => {
  const onMennuContainer1Click = useCallback(() => {
    // Please sync "Profile / Default" to the project
  }, []);

  return (
    <div className={styles.profileNoti}>
      <div className={styles.menu}>
        <div className={styles.menuMini}>
          <div className={styles.frameParent}>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/uangledoubleright.svg"
              />
            </div>
            <div className={styles.iconButtonParent}>
              <div className={styles.iconButton}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uhomealt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ulistul.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usuitcase.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ufilemedicalalt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usitemap.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uusersalt.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.uangleDoubleRightWrapper}>
            <img
              className={styles.uangleDoubleRightIcon}
              alt=""
              src="/usetting.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.qunLTiKhonParent}>
              <div className={styles.qunLTi}>Quản lý tài khoản</div>
              <div className={styles.mennuParent}>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucreatedashboard.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Thông tin cá nhân</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu1} onClick={onMennuContainer1Click}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/unotifiacation.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý thông báo</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucommentdots.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Trò chuyện</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ulock.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đổi mật khẩu</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ueditalt2.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý chữ ký</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ufileblank.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Tài liệu của tôi</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/usignoutalt.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đăng xuất</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileNotiChild} />
      <div className={styles.frameGroup}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.flow1Parent}>
              <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
              <div className={styles.avt}>
                <img
                  className={styles.unsplashfgUd73uZmIcon}
                  alt=""
                  src="/unsplashfg-ud73u-zm@2x.png"
                />
                <div className={styles.state} />
                <div className={styles.label}>KA</div>
              </div>
              <div className={styles.overviewParent}>
                <div className={styles.qunLTi}>My Profile</div>
                <div className={styles.employees}>Employees</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.memberParent}>
                <div className={styles.member}>
                  <div className={styles.avt1}>
                    <div className={styles.userpic} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>KA</div>
                  </div>
                  <div className={styles.avt2}>
                    <div className={styles.userpic1} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>NH</div>
                  </div>
                  <div className={styles.avt3}>
                    <div className={styles.userpic2} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>HN</div>
                  </div>
                  <div className={styles.avt4}>
                    <img
                      className={styles.ovalCopy3}
                      alt=""
                      src="/flow-1.svg"
                    />
                    <div className={styles.wrapper}>
                      <div className={styles.div}>+3</div>
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.usearchParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/usearch.svg"
                    />
                    <input
                     type="text"
                      placeholder="Search..."
                      value={searchTerm}
                   onChange={handleInputChange}
                   />
                  </div>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/flow-1.svg"
                  />
                </div>
              </div>
              <div className={styles.uplusWrapper}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/uplus.svg"
                />
              </div>
              <div className={styles.memberParent}>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucommentdots1.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/unotifiacation1.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.unsplashfgUd73uZmWrapper}>
                  <img
                    className={styles.unsplashfgUd73uZmIcon1}
                    alt=""
                    src="/unsplashfg-ud73u-zm1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.flow1Parent}>
            <div className={styles.thngBo}>Thông báo</div>
            <div className={styles.container}>
              <div className={styles.div1}>03</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.inputParent}>
              <div className={styles.input1}>
                <div className={styles.usearchParent}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/usearch.svg"
                  />
                  <div className={styles.search}>Tìm kiếm thông báo</div>
                </div>
                <img
                  className={styles.uangleDownIcon}
                  alt=""
                  src="/flow-1.svg"
                />
              </div>
              <div className={styles.filterParent}>
                <div className={styles.filter}>
                  <div className={styles.ufilterParent}>
                    <img
                      className={styles.ufilterIcon}
                      alt=""
                      src="/flow-1.svg"
                    />
                    <div className={styles.bLc}>Tất cả</div>
                  </div>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
                <div className={styles.iconChartParent}>
                  <img
                    className={styles.iconChart}
                    alt=""
                    src="/icon--chart.svg"
                  />
                  <div className={styles.bLc}>Đọc tất cả</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.notiParent}>
              <div className={styles.noti}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplashfg-ud73u-zm@2x.png"
                    />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti1}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplash6vpeodpfnas@2x.png"
                    />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplashymo-yc-n-2o@2x.png"
                    />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti1}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplashpuhxosappfa@2x.png"
                    />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti1}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplashk2u71wv2ei4@2x.png"
                    />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <div className={styles.unsplashfgUd73uZm} />
                    <div className={styles.state} />
                    <div className={styles.label9}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off1.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplashfg-ud73u-zm@2x.png"
                    />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off1.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <div className={styles.unsplashfgUd73uZm1} />
                    <div className={styles.state} />
                    <div className={styles.label9}>HA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off1.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.noti}>
                <div className={styles.avtParent}>
                  <div className={styles.avt}>
                    <div className={styles.unsplashfgUd73uZm2} />
                    <div className={styles.state} />
                    <div className={styles.label9}>VA</div>
                  </div>
                  <div className={styles.mohammedAlElNenyParent}>
                    <div className={styles.bLc}>
                      <span className={styles.mohammedAlElNeny}>
                        <span>Mohammed Al El Neny</span>
                      </span>
                      <span className={styles.likedYourArticleThatYouve}>
                        <span className={styles.mohammedAlElNeny}>{` `}</span>
                        <span>liked your article that you’ve post.</span>
                      </span>
                    </div>
                    <div className={styles.minutesAgo}>12 Minutes ago</div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/unotifiacation-off1.svg"
                    />
                  </div>
                  <div className={styles.iconAction}>
                    <img
                      className={styles.iconChart}
                      alt=""
                      src="/utrash1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              <div className={styles.fillArrowheadLeftParent}>
                <img
                  className={styles.fillArrowheadLeft}
                  alt=""
                  src="/-fill--arrowheadleft.svg"
                />
                <div className={styles.dueDate}>1</div>
              </div>
              <div className={styles.fillArrowheadLeftGroup}>
                <img
                  className={styles.fillArrowheadLeft1}
                  alt=""
                  src="/flow-1.svg"
                />
                <div className={styles.bLc}>1</div>
              </div>
              <div className={styles.fillArrowheadLeftContainer}>
                <img
                  className={styles.fillArrowheadLeft1}
                  alt=""
                  src="/flow-1.svg"
                />
                <div className={styles.bLc}>2</div>
              </div>
              <div className={styles.fillArrowheadLeftContainer}>
                <img
                  className={styles.fillArrowheadLeft1}
                  alt=""
                  src="/flow-1.svg"
                />
                <div className={styles.bLc}>3</div>
              </div>
              <div className={styles.fillArrowheadLeftContainer}>
                <img
                  className={styles.fillArrowheadLeft1}
                  alt=""
                  src="/flow-1.svg"
                />
                <div className={styles.bLc}>...</div>
              </div>
              <div className={styles.fillArrowheadLeftContainer}>
                <img
                  className={styles.fillArrowheadLeft1}
                  alt=""
                  src="/flow-1.svg"
                />
                <div className={styles.bLc}>10</div>
              </div>
              <div className={styles.fillArrowheadRightParent}>
                <img
                  className={styles.fillArrowheadLeft}
                  alt=""
                  src="/-fill--arrowheadright.svg"
                />
                <div className={styles.dueDate}>10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNoti;
