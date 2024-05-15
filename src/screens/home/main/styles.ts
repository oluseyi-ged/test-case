import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: palette.white,
    position: 'relative',
    paddingHorizontal: HDP(24),
  },
  pageWrap: {
    backgroundColor: '#fff',
    flex: 1,
  },
  underlineStyleBase: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#98989A',
    height: HDP(43),
    color: '#0D0D0F',
  },
  resendBox: {
    paddingHorizontal: HDP(32),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  resendText: {
    fontSize: RF(10),
    fontFamily: family.Medium,
    color: '#154655',
  },
  resendSpan: {
    fontSize: RF(10),
    fontFamily: family.Medium,
    color: '#154655',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: RF(14),
    color: '#0F0F0F',
    fontFamily: family.Medium,
  },
  blankText: {
    fontSize: RF(10),
    color: '#A4A6A6',
    fontFamily: family.Medium,
  },
  firstCta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  todayLabel: {
    fontSize: RF(14),
    color: '#0F0F0F',
    fontFamily: family.Bold,
  },
  dateText: {
    fontSize: RF(10),
    color: '#0F0F0F',
    fontFamily: family.Regular,
  },
  openCta: {
    fontSize: RF(12),
    color: '#374267',
    fontFamily: family.Regular,
  },
  openGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: HDP(4),
  },
  currLoc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: HDP(100),
    padding: HDP(5),
    gap: HDP(10),
  },
  markText: {
    fontSize: RF(12),
    color: '#374267',
    fontFamily: family.Bold,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  timeFrame: {
    flexDirection: 'row',
    gap: HDP(5),
    backgroundColor: '#E3ECFF',
    borderRadius: HDP(100),
    paddingVertical: HDP(12),
    paddingHorizontal: HDP(8),
  },
  currTime: {
    fontSize: RF(10),
    color: '#004BFF',
    fontFamily: family.Regular,
  },
  stopsGrid: {
    gap: HDP(40),
  },
  flowCta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: HDP(5),
  },
  flowCtaText: {
    fontSize: RF(10),
    color: '#374267',
    fontFamily: family.Regular,
  },
  heroImg: {
    width: HDP(150),
    height: HDP(148),
    alignSelf: 'center',
    borderRadius: HDP(16),
    overflow: 'hidden',
  },
  advertImg: {
    width: '90%',
    height: HDP(147),
    borderRadius: HDP(16),
    overflow: 'hidden',
  },
  ctaGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  skipText: {
    color: palette.dark,
    fontFamily: family.Bold,
    fontSize: RF(10),
  },
  indicate: {
    height: HDP(9),
    width: HDP(45),
    backgroundColor: '#3ED2FF',
    justifyContent: 'center',
    borderRadius: HDP(4),
  },
  unindicate: {
    height: HDP(9),
    width: HDP(9),
    backgroundColor: '#D8F6FF',
    justifyContent: 'center',
    borderRadius: HDP(100),
  },
  transItem: {
    flexDirection: 'row',
    borderRadius: HDP(8),
    overflow: 'hidden',
    backgroundColor: '#F9FAFB',
    marginBottom: HDP(8),
  },
  iconSect: {
    flex: 0.2,
    backgroundColor: '#E3ECFF',
    justifyContent: 'center',
  },
  extraSect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.8,
    paddingHorizontal: HDP(8),
    paddingVertical: HDP(8),
    alignItems: 'center',
  },
  itemType: {
    fontSize: RF(12),
    color: '#0D0D0F',
    fontFamily: family.Medium,
    textTransform: 'capitalize',
  },
  itemDate: {
    fontSize: RF(10),
    color: '#0D0D0F',
    fontFamily: family.Regular,
    textTransform: 'capitalize',
  },
  itemAmt: {
    fontSize: RF(12),
    fontFamily: family.Medium,
  },
  headerLabel: {
    fontSize: RF(14),
    fontFamily: family.Bold,
    color: palette.dark,
    marginBottom: HDP(8),
    textTransform: 'capitalize',
  },
  headerSub: {
    fontSize: RF(12),
    fontFamily: family.Regular,
    color: '#6A6A6A',
  },
  idText: {
    fontSize: RF(14),
    fontFamily: family.Regular,
    color: '#374267',
    textAlign: 'center',
  },
  idSpan: {
    fontSize: RF(14),
    fontFamily: family.Bold,
    color: '#1F6980',
  },
  modalHeader: {
    fontSize: RF(17),
    fontFamily: family.Bold,
    color: palette.dark,
    textAlign: 'center',
  },
  ctaBtn: {
    width: width * 0.85,
    alignSelf: 'center',
  },
  padCheck: {
    paddingRight: HDP(20),
    paddingVertical: HDP(10),
  },
  tocCta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optText: {
    fontSize: RF(12),
    fontFamily: family.Medium,
    color: '#4C4D4D',
  },
  buyBox: {
    paddingHorizontal: HDP(20),
    height: height * 0.7,
  },
  buyTitle: {
    fontSize: RF(12),
    fontFamily: family.Medium,
    color: '#8B96BB',
  },
  buyOptions: {
    padding: HDP(20),
    backgroundColor: '#F0F4FF',
    borderRadius: HDP(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: HDP(16),
  },
  optGrid: {
    flex: 0.9,
  },
  gridLeft: {
    fontSize: RF(14),
    fontFamily: family.Medium,
    color: '#232C49',
  },
  gridRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSpan: {
    fontSize: RF(8),
    fontFamily: family.Medium,
    color: '#232C49',
  },
  optDesc: {
    fontSize: RF(10),
    fontFamily: family.Regular,
    color: '#7782A7',
  },
  trainGrid: {
    flexDirection: 'row',
    gap: HDP(8),
  },
  activeItem: {
    backgroundColor: '#0A0A0A',
    borderRadius: HDP(100),
    paddingHorizontal: HDP(16),
    paddingVertical: HDP(8),
  },
  inactiveItem: {
    backgroundColor: '#F6F6F6',
    borderRadius: HDP(100),
    paddingHorizontal: HDP(16),
    paddingVertical: HDP(8),
  },
  activeText: {
    fontSize: RF(12),
    fontFamily: family.Regular,
    color: palette.white,
  },
  inactiveText: {
    fontSize: RF(12),
    fontFamily: family.Regular,
    color: '#4C4D4D',
  },
  rightWhite: {
    fontSize: RF(8),
    fontFamily: family.Regular,
    color: '#fff',
  },
  gridBlue: {
    backgroundColor: '#2A69FF',
    padding: HDP(8),
    borderRadius: HDP(16),
  },
  whoGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: HDP(16),
    backgroundColor: '#F0F4FF',
    borderRadius: HDP(16),
    padding: HDP(16),
  },
  whoText: {
    fontSize: RF(14),
    fontFamily: family.Medium,
    color: '#7782A7',
  },
  heroBanner: {
    flexDirection: 'row',
    backgroundColor: '#F0F4FF',
    borderRadius: HDP(16),
    width: width * 0.9,
    alignSelf: 'center',
    overflow: 'hidden',
    height: HDP(148),
  },
  contentSide: {
    paddingLeft: HDP(16),
    paddingVertical: HDP(24),
    flex: 0.6,
  },
  swipeCont: {
    flexDirection: 'row',
    backgroundColor: '#F0F4FF',
    borderRadius: HDP(16),
    width: width * 0.8,
    alignSelf: 'center',
    overflow: 'hidden',
    height: HDP(148),
    marginRight: HDP(10),
  },
  imgSide: {
    alignSelf: 'flex-start',
    flex: 0.4,
  },
  contentFirst: {
    fontSize: RF(12),
    fontFamily: family.Medium,
    color: '#8B96BB',
  },
  contentBold: {
    fontSize: RF(18),
    fontFamily: family.Bold,
    color: '#232C49',
  },
  linkText: {
    fontSize: RF(8),
    fontFamily: family.Medium,
    color: '#232C49',
  },
});

export default styles;
