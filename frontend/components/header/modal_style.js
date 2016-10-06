const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.50)',
    zIndex          : 10
  },
  content : {
    top             : '100px',
    left            : 0,
    right           : 0,
    bottom          : '100px',
    margin          : 'auto',
    width           : '480px',
    padding         : 0,
    borderRadius    : '4px',
    border          : '2px solid #444',
    backgroundColor : '#292929',
    zIndex          : 11,
    overflow: 'hidden'
  }
};

export default ModalStyle;
