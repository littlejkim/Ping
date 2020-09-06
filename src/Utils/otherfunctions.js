



function transYtoIndex(transY, length) {
    let x = transY - 200;
    if (x > 0) {
      return 0;
    } else {
      x *= -1;
      if (Math.round(x / 100) > length - 1) {
        return length - 1;
      }
      return Math.round(x / 100);
    }
  
    // switch (true) {
    //   case (transY>=151):
    //     return 0;
    //     break;
    //   case (transY<=150 && transY>=51):
    //     return 1;
    //     break;
    //   case (transY<=50 && transY>=-49):
    //     return 2;
    //     break;
    //   case (transY<=-50 && transY>=-149):
    //     return 3;
    //     break;
    //   case (transY<=-150 && transY>=-249):
    //     return 4;
    //     break;
    //   case (transY<=-250 && transY>=-349):
    //     return 5;
    //     break;
    //   case (transY <=-350):
    //     return 6;
    //     break;
    //   default:
    //     break;
    // }
  }

export {
    transYtoIndex,
};
      