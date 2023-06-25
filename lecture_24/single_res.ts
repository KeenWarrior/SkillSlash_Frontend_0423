interface ScanBehaviour {
  scan(): void;
}

interface FaxBehaviour {
  fax(): void;
}

class Printer {
  print() {
    console.log("print");
  }
}

class JustPrint extends Printer {
  print() {
    console.log("Just print");
  }
}

class PrintAndScan extends Printer implements ScanBehaviour {
  print() {
    console.log("Print like PrintAndScan");
  }
  scan() {
    console.log("Scan");
  }
}
