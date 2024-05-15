import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#004BFF30',
  },
  pageWrap: {
    flex: 1,
    height,
    justifyContent: 'space-between',
  },
  contentBox: {
    paddingHorizontal: HDP(24),
    paddingVertical: HDP(57),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: RF(20),
    color: palette.white,
    fontFamily: family.Bold,
    textAlign: 'center',
    width: '90%',
    lineHeight: HDP(34),
  },
  ctaGrid: {
    flexDirection: 'row',
    gap: HDP(16),
  },
  leftCta: {
    backgroundColor: palette.blue,
    paddingVertical: HDP(16),
    borderRadius: HDP(100),
    width: width * 0.4,
  },
  rightCta: {
    backgroundColor: 'transparent',
    paddingVertical: HDP(16),
    borderWidth: 1,
    borderColor: palette.white,
    borderRadius: HDP(100),
    width: width * 0.4,
  },
  ctaText: {
    fontSize: RF(14),
    color: palette.white,
    fontFamily: family.Bold,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  floatText: {
    fontSize: RF(12),
    color: palette.white,
    fontFamily: family.Medium,
    textAlign: 'center',
    paddingVertical: HDP(20),
  },
  spanText: {
    fontSize: RF(12),
    color: '#3ED2FF',
    fontFamily: family.Bold,
  },
});

export default style;
