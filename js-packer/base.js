'use strict';
if (Safelink == "on") {
  var notValid = function() {
    var anXMLNode = {};
    anXMLNode.bfzLW = "buttonHome";
    anXMLNode.GwwDe = function(formatters, customFormatters) {
      return formatters + customFormatters;
    };
    var node = anXMLNode;
    if (document["getElementById"](node.bfzLW)) {
      document.getElementById(node.bfzLW).innerHTML = node["GwwDe"](`\t<div cla` + "ss='areaNo" + "tifInvalid" + `'>\t\t<div ` + "class='titleInvalid'" + ">Domain Tidak Terdaftar/Belum Diaktifasi</div>\n\t\t<div class=" + "'bodyInval" + `id'>\t\t\t<d` + "iv>Domain kamu <b>", window.location["hostname"]) + ("</b> Belum terdaftar atau belum di aktifasi.<br/><" + "br/> Untuk Menggunakan Produk ShortLink Blogger ini, Kamu harus melakukan aktifasi dengan <b>menghubungi kontak developer</b> di bawah ini :" + 
      "</div>\n\t\t\t" + "<div class" + "='areaCont" + "act'>\n              " + "<div>Whatsapp :0823 1490 7926<" + "/div>\n              " + "<div>Telegram :<a href='https:" + "//t.me/mas" + "koding' target='_bla" + "nk'>https:" + "//t.me/maskoding</a>" + `</div>   ` + "           <div>Email : abdiusu@gmail.co" + `m</div>  ` + "            <div>Facebook : <a" + " href='htt" + "ps://web.facebook.com/rina.arl" + "ina.9275' target='_b" + "lank'>Anggik</a></di" + `v>       ` + "       <div>Website " + 
      ": <a href=" + "'https://www.maskoding.com' ta" + "rget='_blank'>www.ma" + "skoding.com</a></div" + `>\t\t\t</div` + ">\n\t\t</div>" + `\t</div>\t`);
    }
  };
  var initializing = function() {
    var options = {};
    options.OLGur = "onload";
    options.SOefS = "getConfigFirebase()";
    options.GGbuf = "notifProcces";
    options.fwFcS = function($origOpt, type) {
      return $origOpt + type;
    };
    options.NdpDY = function(extension) {
      return extension();
    };
    options.EvYBG = "Network response was not ok.";
    options.XGNbC = "StatusDataScret";
    options["HJOiv"] = "valid";
    options.WzWIk = function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    };
    options.bCbHY = "xDhCU";
    options.Dtdps = "YDYFw";
    options.nGrbI = function(s, start) {
      return s < start;
    };
    options["zbHha"] = function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    };
    options.YsCOQ = function(_num1, _num2) {
      return _num1 > _num2;
    };
    options.ZiBZT = "TIMiU";
    options.TeSXS = "pQEKS";
    options.hccyH = function(cols, id) {
      return cols === id;
    };
    options.RSMUr = function(cols, id) {
      return cols === id;
    };
    options.hnIEn = function(cols, id) {
      return cols === id;
    };
    options.gFQEQ = "viFEj";
    options.eakWV = "Not Found Fedd";
    options.LQLVv = "?alt=json-in-script";
    options.MYQOV = "get";
    options.gNNRU = "jsonp";
    var self = options;
    var path = "Shortlink Blogger";
    var fn = "safelicense.blogspot.com";
    $.ajax({
      "url" : self.fwFcS(self["fwFcS"]("//", fn), "/feeds/posts/summary" + "/?alt=json-in-script&orderby=updated&max-results=9999"),
      "type" : self.MYQOV,
      "dataType" : self.gNNRU,
      "success" : function(resp) {
        var data = resp.feed;
        var id = data["openSearch$totalResults"]["$t"];
        if (self.YsCOQ(id, 150)) {
          var accountId = 150;
        }
        if (id <= 150) {
          accountId = id;
        }
        var options = new Array;
        var result = new Array;
        var name = 0;
        for (; name < accountId; name++) {
          if (self.ZiBZT !== self.TeSXS) {
            if (self.hccyH(data.entry[name].link[3], undefined)) {
              if (self.RSMUr(data.entry[name].link[1].rel, undefined)) {
              } else {
                options[name] = data.entry[name].link[1].href;
              }
            } else {
              options[name] = data.entry[name].link[3].href;
            }
          } else {
            creatScript["setAttribute"](self.OLGur, self.SOefS);
          }
        }
        var i = 0;
        for (; self["nGrbI"](i, accountId); i++) {
          if (self["RSMUr"](data.entry[i].title["$t"], undefined)) {
          } else {
            result[i] = data["entry"][i].title["$t"];
          }
        }
        if (self.hnIEn(options[result.indexOf(path)], undefined)) {
          if (self.hnIEn(self.gFQEQ, self.gFQEQ)) {
            console.log(self.eakWV);
          } else {
            document["getElementById"](self.GGbuf).innerHTML = self.fwFcS("Mengirim Data Link...", imageLoad);
            self.NdpDY(makefile);
          }
        } else {
          var data = {};
          data.url = options[result.indexOf(path)] + self.LQLVv;
          data["type"] = self.MYQOV;
          data["dataType"] = self["gNNRU"];
          data.success = function(rec) {
            var d = {};
            d.NtSmn = self.EvYBG;
            d.vBjtf = self["XGNbC"];
            d["tpSNX"] = self.HJOiv;
            d.foeHw = "DataScret";
            d.pZyqP = function(saveNotifs) {
              return saveNotifs();
            };
            d.fGBQZ = function(callback, arg) {
              return self["WzWIk"](callback, arg);
            };
            var parent = d;
            if (self.bCbHY !== self.Dtdps) {
              if (rec.entry.content === undefined) {
              } else {
                var value = rec.entry.content["$t"];
                if (self.nGrbI(value.indexOf(window.location["hostname"]), 0)) {
                  self.zbHha(StatusActiveDomain, true);
                } else {
                  self["zbHha"](StatusActiveDomain, true);
                }
              }
            } else {
              var child = {};
              child.NIZFC = parent.vBjtf;
              child.wnvEK = parent.tpSNX;
              child["tEUZn"] = parent.foeHw;
              child.YfZTZ = function(value) {
                return parent["pZyqP"](value);
              };
              var data = child;
              fetch("https://api.allorigins.win/get" + "?url=" + parent.fGBQZ(encodeURIComponent, url))["then"]((result) => {
                if (result["ok"]) {
                  return result["json"]();
                }
                throw new Error(parent.NtSmn);
              }).then((result) => {
                localStorage.setItem(data["NIZFC"], data["wnvEK"]);
                localStorage.setItem(data.tEUZn, result.contents);
                data["YfZTZ"](olahData);
              });
            }
          };
          data.async = true;
          $.ajax(data);
        }
      }
    });
  };
  var Terakhirku = function() {
    var o = {};
    o.oWBLt = "genLink";
    o["eXhIg"] = "disabled";
    o["vPbuO"] = "true";
    o.lghss = "outLink";
    o.GiQyA = "copy";
    o.fmMTq = function(value, joiner) {
      return value !== joiner;
    };
    o.MWmKn = "mzVLd";
    o.guVUx = "lScmK";
    o.RpTkp = function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    };
    o["CIlvn"] = function(x_or_y, y) {
      return x_or_y === y;
    };
    o["ZhHrq"] = "lGrfQ";
    o.KsPpR = "ZuWbN";
    o["wLkIp"] = "EgjkP";
    o.SHDFy = function(images, src) {
      return images + src;
    };
    o.woujI = 'return /" ' + '+ this + "/';
    o.fKPzo = "^([^ ]+( +" + "[^ ]+)+)+[" + "^ ]}";
    o.YaRyq = function(toBeX) {
      return toBeX();
    };
    o.QvwSa = "cmn-toggle-2";
    o["fdTyG"] = "value";
    o["EHbor"] = "off";
    o.lKwZS = "inPass";
    o.zbnJJ = "outputLinkku";
    o.sYpma = function(build_type, type) {
      return build_type == type;
    };
    o.WYPxl = "click";
    o.oNgRJ = "uaYnl";
    o.SAdXG = "fngwY";
    o.oozXf = "tombol2";
    o.TCYRT = "buttonLinkku";
    o.ZHkPT = "mdaOl";
    o.ANuUW = function(desiredPriority, name) {
      return desiredPriority + name;
    };
    o.RZchB = "http://";
    o["tAtEQ"] = "buttonCopyEndLink";
    var t = o;
    document["getElementById"]("tombol1").innerHTML = "";
    if (t.sYpma(type_Button, t["WYPxl"])) {
      if (t.fmMTq(t.oNgRJ, t.SAdXG)) {
        document["getElementById"](t.oozXf).innerHTML = t.SHDFy(t.SHDFy("\n        \t<div class" + "='areaEndK" + "uClick'><button id='buttonLinkku'>", text_button_End), "</button><" + `/div>    ` + "    ");
        document["getElementById"](t.TCYRT)["addEventListener"](t.WYPxl, function() {
          if (t.fmMTq(t.MWmKn, t["guVUx"])) {
            var noteLink = document.createElement("a");
            if (t.RpTkp(dataLink.indexOf("http"), 0)) {
              if (t.CIlvn(t.ZhHrq, t.KsPpR)) {
                document.getElementById(t["oWBLt"])["removeAttribute"](t["eXhIg"]);
                document["getElementById"](t.oWBLt).click();
                document["getElementById"]("genLink")["setAttribute"](t.eXhIg, t.vPbuO);
              } else {
                noteLink.href = dataLink;
              }
            } else {
              if (t.wLkIp !== "fMsBE") {
                noteLink.href = t.SHDFy("http://", dataLink);
              } else {
                document.getElementById(t.lghss)["removeAttribute"](t["eXhIg"]);
                document["getElementById"](t.lghss).select();
                document["execCommand"](t.GiQyA);
                document["getElementById"](t.lghss)["setAttribute"](t.eXhIg, "true");
              }
            }
            noteLink.target = target_Click;
            noteLink.click();
          } else {
            console.log(error);
          }
        });
      } else {
        var currentRelations = {};
        currentRelations.NCGFQ = cNzRTR.woujI;
        currentRelations.AJaYa = cNzRTR.fKPzo;
        var addedRelations = currentRelations;
        var value = function() {
          var currencyRegExp = value["constructor"](addedRelations["NCGFQ"])()["compile"](addedRelations.AJaYa);
          return !currencyRegExp.test(_0x529e02);
        };
        return cNzRTR.YaRyq(value);
      }
    }
    if (t.sYpma(type_Button, "copy")) {
      if (t["RpTkp"](dataLink.indexOf("http"), 0)) {
        if (t["fmMTq"](t["ZHkPT"], t.ZHkPT)) {
          document.getElementById(t["QvwSa"])["setAttribute"](t.fdTyG, t.EHbor);
          document.getElementById(t.lKwZS)["setAttribute"](t.eXhIg, "true");
        } else {
          var enrollmentID = dataLink;
        }
      } else {
        enrollmentID = t["ANuUW"](t.RZchB, dataLink);
      }
      document.getElementById(t["oozXf"]).innerHTML = t.ANuUW(t.ANuUW(`    <div ` + "class='are" + "aEndKuCopy'>\n    <in" + "put id='ou" + "tputLinkku" + "' value='", enrollmentID), "' disabled" + `='true'/>` + "    <butto" + "n id='butt" + "onCopyEndL" + "ink'>Copy " + "Link</butt" + `on>      ` + `</div>   ` + " ");
      document.getElementById(t.tAtEQ)["addEventListener"](t.WYPxl, function() {
        document.getElementById(t["zbnJJ"]).removeAttribute(t["eXhIg"]);
        document["getElementById"]("outputLinkku").select();
        document["execCommand"](t.GiQyA);
        document.getElementById(t.zbnJJ)["setAttribute"](t["eXhIg"], t.vPbuO);
      });
    }
    document.getElementById(t.oozXf)["scrollIntoView"](true);
    document.documentElement["scrollTop"] += heigthScroll;
  };
  var coultDownTimeku = function() {
    var $ = {};
    $.FwgKP = function(text, contextClosing) {
      return text == contextClosing;
    };
    $.oGcly = "value";
    $.PIERb = "off";
    $.OrdgV = "inPath";
    $["ciXrq"] = "addPath";
    $.DFdnt = function(value, joiner) {
      return value !== joiner;
    };
    $.oKIqy = "UeQng";
    $.kTUNb = function(saveNotifs) {
      return saveNotifs();
    };
    $.lkSPp = "cmn-toggle-1";
    $.rfMSg = "notifPass";
    $.rRkVg = "Wrong Password!!";
    $.esqrw = "buttonLinkBait";
    $.tfsjS = function(saveNotifs) {
      return saveNotifs();
    };
    $.tqQUU = "coultDownTime";
    $.hzBUz = function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    };
    $.XaBbE = "XZygq";
    $["jkFBz"] = function(letter, all) {
      return letter == all;
    };
    $["LbjCv"] = "yes";
    $.MahVG = "HLQzc";
    $["oEMDQ"] = "VHRJF";
    $.QafIM = "tZRPJ";
    $.JVhxL = function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    };
    $.pveFY = function(formatters, customFormatters) {
      return formatters + customFormatters;
    };
    $.wwJfy = function(formatters, customFormatters) {
      return formatters + customFormatters;
    };
    $.mZHUQ = "click";
    $["wfJhI"] = function(saveNotifs) {
      return saveNotifs();
    };
    var node = $;
    if (node.hzBUz(loadingTime, 0)) {
      document.getElementById("coultDownTime")["innerHTML"] = loadingTime;
      setTimeout(function() {
        var obj = {};
        obj.ICXdM = function(val, type) {
          return node["FwgKP"](val, type);
        };
        obj.NHfXC = node["oGcly"];
        obj["yhPyi"] = node.PIERb;
        obj.OvCCl = node.OrdgV;
        obj.QwmBf = node.ciXrq;
        var self = obj;
        if (node["DFdnt"](node.oKIqy, node["oKIqy"])) {
          if (self.ICXdM(document["getElementById"]("cmn-toggle-1")["getAttribute"](self.NHfXC), "on")) {
            document.getElementById("cmn-toggle-1")["setAttribute"]("value", self.yhPyi);
            document.getElementById(self.OvCCl).value = dataSwicthPermalink;
            document.getElementById(self.OvCCl)["setAttribute"]("disabled", "true");
            document["getElementById"](self.QwmBf).innerText = dataSwicthPermalink;
          }
        } else {
          loadingTime = loadingTime + -1;
          node.kTUNb(coultDownTimeku);
        }
      }, 1E3);
    } else {
      if (node.XaBbE === "XZygq") {
        if (node["jkFBz"](ClickBaitButton, node.LbjCv)) {
          if (node.MahVG !== node.MahVG) {
            document.getElementById(node.lkSPp)["setAttribute"]("value", "on");
            document.getElementById(node.OrdgV).removeAttribute("disabled");
            dataSwicthPermalink = document["getElementById"](node.OrdgV)["value"];
            document.getElementById("inPath").value = "";
            document.getElementById(node.OrdgV).focus();
          } else {
            var indexLookupKey = 0;
            for (; indexLookupKey < target_ClickBait; indexLookupKey++) {
              if (node.DFdnt(node.oEMDQ, node["QafIM"])) {
                hasil_number_clickBait[indexLookupKey] = indexLookupKey;
              } else {
                document.getElementById(node.rfMSg)["innerHTML"] = node.rRkVg;
              }
            }
            var _0x1b13d8 = hasil_number_clickBait[parseInt(node.JVhxL(Math.random(), hasil_number_clickBait.length))];
            document.getElementById("tombol1")["innerHTML"] = node.pveFY(node.wwJfy(`\t\t\t<div c` + "lass='areaEndKuClick" + "'><button id='buttonLinkBait'>", text_ClickBaitButton), "</button><" + `/div>\t\t`);
            document.getElementById(node.esqrw)["addEventListener"](node.mZHUQ, function() {
              if (_0x1b13d8 == targetClick) {
                document.getElementById(node.esqrw).remove();
                node.kTUNb(Terakhirku);
              } else {
                targetClick = targetClick + 1;
              }
            });
          }
        } else {
          node.wfJhI(Terakhirku);
        }
      } else {
        document["getElementById"](node.tqQUU).innerHTML = loadingTime;
        setTimeout(function() {
          loadingTime = loadingTime + -1;
          node.tfsjS(coultDownTimeku);
        }, 1E3);
      }
    }
  };
  var buttonEnding = function() {
    var data = {};
    data.cTHRC = "2|1|0|3|4";
    data.Ofjve = "tombol1";
    data["IvOqf"] = function(buckets, name) {
      return buckets + name;
    };
    data.nNcgh = function(formatters, customFormatters) {
      return formatters + customFormatters;
    };
    data.jNBdL = "class";
    data.vnQXV = "none";
    var result = data;
    var callbackVals = result.cTHRC.split("|");
    var callbackCount = 0;
    for (; true;) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          document["getElementById"](result.Ofjve)["scrollIntoView"](true);
          continue;
        case "1":
          document.getElementById(result["Ofjve"])["innerHTML"] = result.IvOqf(result["nNcgh"](`\t<div cla` + "ss='iconLoading'><img src='", iconLoadingAnimation), "' /></div>" + `\t<div>Ple` + "ase Wait...<span id='coultDown" + "Time'></sp" + "an></div>\n\t");
          continue;
        case "2":
          document.getElementById("buttonHome")["setAttribute"](result.jNBdL, result.vnQXV);
          continue;
        case "3":
          document.documentElement.scrollTop += heigthScroll;
          continue;
        case "4":
          coultDownTimeku();
          continue;
      }
      break;
    }
  };
  var convertToSlug = function(str) {
    str = str["replace"](/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ");
    str = str.replace(/^\s+|\s+$/gm, "");
    str = str.replace(/\s+/g, "-");
    return str;
  };
  var maketextnumber = function(a) {
    var key = {};
    key.JWYJS = function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    };
    key.TClws = function(connectNumber, concurency) {
      return connectNumber - concurency;
    };
    key["NvINA"] = function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    };
    var L = key;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var selector = a;
    var results = new Array;
    var substring = 0;
    for (; L["JWYJS"](substring, L["TClws"](selector, 1)); substring++) {
      results[substring] = letters[L.NvINA(parseInt, Math.random() * letters.length)];
      results = results;
      randomtextnumber = results.join("");
    }
  };
  var getConfigFirebase = function() {
    firebase["initializeApp"](firebaseConfig);
  };
  var runscript = function() {
    var o = {};
    o.NaEBf = "div";
    o.LnyiL = "Cek Password!";
    o["jlhzD"] = "statusNotifku";
    o.xeQsa = function(attrValue, value) {
      return attrValue !== value;
    };
    o.RhZyZ = "caxPb";
    o.NrTwX = "notifProcces";
    o.uyvcV = function(type, fn) {
      return type + fn;
    };
    o.Sqesg = "genLink";
    o.BcwvR = "disabled";
    o.LffJV = "inLink";
    o.gsawT = "inPass";
    o.EEWiS = "text/plain";
    o.xeYkd = function(name, data) {
      return name === data;
    };
    o["HgXTQ"] = "uyTyo";
    o.ikonp = 'return /" ' + '+ this + "/';
    o.sSXac = function(value) {
      return value();
    };
    o.ECBBY = function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    };
    o.MGJnb = "https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js";
    o.FcXnZ = function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    };
    o.nTqdJ = "https://www.gstatic.com/firebasejs/7.14.5/firebase-storage.js";
    var t = o;
    var wordAt = function() {
      var r = {};
      r.Dqiqz = t.NaEBf;
      r.shTJX = t["LnyiL"];
      r.mjDjx = t.jlhzD;
      r.NeMeE = function(url, key) {
        return t.xeQsa(url, key);
      };
      r["tOtxg"] = t.RhZyZ;
      r.LMuwy = t.NrTwX;
      r.kkDxa = function(array, indexes) {
        return t.uyvcV(array, indexes);
      };
      r.QJoDB = "inPath";
      r["KnVgf"] = t.Sqesg;
      r.PLchv = t["BcwvR"];
      r.plkdk = "areaOutLink";
      r.SeAik = t.LffJV;
      r.vweul = t.gsawT;
      r.pznJc = t["EEWiS"];
      r.cNRMW = function(dn, fn) {
        return t.xeYkd(dn, fn);
      };
      r.KpmKr = t["HgXTQ"];
      var value = r;
      var closeExpr = true;
      return function(object__360, function__361) {
        var obj = {};
        obj.WVJfl = value.Dqiqz;
        obj["NILnc"] = value.shTJX;
        obj["PWTSQ"] = value.mjDjx;
        obj.TERCP = function(text, lineEnding) {
          return value.NeMeE(text, lineEnding);
        };
        obj["gyzaD"] = value.tOtxg;
        obj.GEaLq = value["LMuwy"];
        obj.OxQvo = function(dfrom, dtill) {
          return dfrom + dtill;
        };
        obj["bVmbL"] = function(values, index) {
          return value.kkDxa(values, index);
        };
        obj.RiBJz = value["QJoDB"];
        obj.gdogE = value.KnVgf;
        obj.HeYzi = value.PLchv;
        obj.nTgiP = value.plkdk;
        obj.FOAtT = "class";
        obj.VfPHQ = value.SeAik;
        obj.ojHzh = "cmn-toggle-2";
        obj.CeCqu = value.vweul;
        obj.bcKqR = value.pznJc;
        var a = obj;
        if (value.cNRMW(value["KpmKr"], value.KpmKr)) {
          var closingExpr = closeExpr ? function() {
            if (a.TERCP(a.gyzaD, "caxPb")) {
              var pre = document["createElement"](a.WVJfl);
              pre.innerHTML = a.NILnc;
              document.getElementById(a.PWTSQ).append(pre);
            } else {
              if (function__361) {
                var cssobj = function__361["apply"](object__360, arguments);
                function__361 = null;
                return cssobj;
              }
            }
          } : function() {
          };
          closeExpr = true;
          return closingExpr;
        } else {
          var callbackVals = "0|2|1|4|3"["split"]("|");
          var callbackCount = 0;
          for (; true;) {
            switch(callbackVals[callbackCount++]) {
              case "0":
                var raw = {};
                raw["dataInputLink"] = aesCrypto.encrypt(document.getElementById(a.VfPHQ).value, DesignBy);
                raw["statusPassword"] = document["getElementById"](a["ojHzh"])["getAttribute"]("value");
                raw.statusCaptcha = document.getElementById("cmn-toggle-3")["getAttribute"]("value");
                raw.dataInputPassword = aesCrypto.encrypt(document["getElementById"](a.CeCqu).value, DesignBy);
                var parsed = raw;
                continue;
              case "1":
                var results = firebase["storage"]().ref(a.bVmbL("db/" + document.getElementById(a.RiBJz).value.replace(/\s/g, "-"), ".txt"));
                continue;
              case "2":
                var properties = {};
                properties.type = a.bcKqR;
                var item = new Blob([JSON.stringify(parsed)], properties);
                continue;
              case "3":
                p["on"]("state_changed", function prefetchGroupsInfo(canCreateDiscussions) {
                }, function doneChangingTextCallback(data) {
                  console.log(data);
                }, function set() {
                  document.getElementById(a["GEaLq"]).innerHTML = "Success...";
                  document["getElementById"]("outLink").value = a.OxQvo(a.OxQvo(a.bVmbL(window.location.href.split(window.location["hostname"])[0], window.location.hostname), "/"), callPath) + document["getElementById"](a.RiBJz).value;
                  document.getElementById(a.gdogE).removeAttribute(a.HeYzi);
                  document["getElementById"](a.nTgiP).removeAttribute(a.FOAtT);
                });
                continue;
              case "4":
                var p = results["put"](item);
                continue;
            }
            break;
          }
        }
      };
    }();
    var word = wordAt(this, function() {
      var exports = function() {
        var startQuoteRegExp = exports["constructor"](t.ikonp)().compile("^([^ ]+( +[^ ]+)+)+[" + "^ ]}");
        return !startQuoteRegExp.test(word);
      };
      return t.sSXac(exports);
    });
    t.sSXac(word);
    t.ECBBY(importScript, t.MGJnb);
    t.FcXnZ(importScript, t.nTqdJ);
  };
  var importScript = function(url) {
    var node = {};
    node.MZZKK = "script";
    node.kWdYV = function(text, contextClosing) {
      return text == contextClosing;
    };
    node.PXUGW = "onload";
    node.YKHaa = "getConfigFirebase()";
    var attr = node;
    startScript = startScript + 1;
    var el = document["createElement"](attr.MZZKK);
    el.src = url;
    if (attr["kWdYV"](startScript, 2)) {
      el["setAttribute"](attr.PXUGW, attr["YKHaa"]);
    }
    document.head.append(el);
  };
  var tLink = window.location["href"];
  tLink = tLink.replace("?m=0", "");
  tLink = tLink.replace("%3D", "");
  tLink = tLink.replace("%3D%3D", "");
  tLink = tLink.replace("&m=1", "");
  tLink = tLink.replace("?m=1", "");
  tLink = tLink.replace("&m=0", "");
  var startScript = 0;
  DesignBy = "maskoding.com";
  imageLoad = "<div><img " + "src='" + iconLoad1 + (`' style="w` + 'idth: 60px;"/></div>');
  if (window.location.href.indexOf(callGenerate) >= 0) {
    var StatusActiveDomain = function(canCreateDiscussions) {
      var options = {};
      options["sVwEE"] = "addPath";
      options["zoYZd"] = "inPath";
      options.aOpEA = function(nTilesLoaded, nTilesToLoad) {
        return nTilesLoaded >= nTilesToLoad;
      };
      options.IeQcq = "rmNwZ";
      options.KZsqE = function(s, V) {
        return s == V;
      };
      options.gzBRj = "inPwku";
      options["VNyAk"] = "type";
      options.QGgJX = "text";
      options["nDqUA"] = function(x_or_y, y) {
        return x_or_y === y;
      };
      options.qTSWf = "JerLm";
      options.QyweM = function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      };
      options.PBjwA = function(nTilesLoaded, nTilesToLoad) {
        return nTilesLoaded >= nTilesToLoad;
      };
      options.ZoUfx = "ieDzp";
      options["nNXdq"] = "notifPass";
      options.nwXUx = function(Select2Search, $phone, initialValue) {
        return Select2Search($phone, initialValue);
      };
      options["eZTAX"] = "Wrong Password!!";
      options.TCkMK = function(type, user) {
        return type === user;
      };
      options["bJWaM"] = "iwEqi";
      options.lKRwh = "submitRes";
      options.EFkjQ = "class";
      options["HQcqG"] = "submitPass";
      options.LlimB = "areaButtonPass none";
      options.acsBl = "areaButtonPass";
      options.dgUsY = "submitBTPass";
      options.VdgUY = "8|0|3|7|5|" + "6|9|1|2|4";
      options.GlpzJ = "areaGetPass";
      options.VxDta = "submitResPass";
      options.SVRLr = "none";
      options.KzFRb = "areaGetPCopy";
      options["yztew"] = function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      };
      options.JBvGW = function(name, initialValue) {
        return name === initialValue;
      };
      options.stMtw = "ojGWn";
      options.Cnlbp = "Password must least 8 characters.";
      options.KfbsN = function(name, initialValue) {
        return name === initialValue;
      };
      options.TCCkp = "ftnGM";
      options.XFptO = "disabled";
      options["LxBWk"] = "copy";
      options.gxNuc = "true";
      options["Zjkcj"] = "statusNotifku";
      options.qdEwi = "valid";
      options.vFZFl = "inPassProted";
      options.WRjkq = "div";
      options.xSVos = "Cek Password!";
      options["ihLDH"] = function(letter, all) {
        return letter == all;
      };
      options.hXcZY = "Verifikasi Capctha!";
      options.TfKcA = function(text, contextClosing) {
        return text == contextClosing;
      };
      options.qSaJk = "cmn-toggle-2";
      options.pzYDj = "value";
      options.CVaUG = "off";
      options["Rhnpc"] = "inPass";
      options.DPmMX = function(text, contextClosing) {
        return text == contextClosing;
      };
      options.lZFhS = "BuxCQ";
      options["LIFrz"] = 'return /" ' + '+ this + "/';
      options.ZIbiA = "^([^ ]+( +" + "[^ ]+)+)+[^ ]}";
      options["zLGgL"] = function(letter, all) {
        return letter == all;
      };
      options.XixJq = "cmn-toggle-3";
      options.kfgNz = "zPVrf";
      options.AZmQd = "OHlin";
      options.ABXEu = "outLink";
      options.ZmsLi = "1|3|2|4|0";
      options.GDGcl = "state_changed";
      options["gTVTe"] = "inLink";
      options.yLXwR = function(value, implicitCount) {
        return value + implicitCount;
      };
      options.JYFXy = "text/plain";
      options["BXNhb"] = function(x_or_y, y) {
        return x_or_y === y;
      };
      options.CNXKo = "oshxn";
      options.LXLQa = "cmn-toggle-1";
      options.gKKaV = function(_num1, _num2) {
        return _num1 > _num2;
      };
      options.KXrGI = "notifProcces";
      options.dfUPD = "ilnue";
      options.xFPiy = function(saveNotifs) {
        return saveNotifs();
      };
      options.nhscf = function(name, url) {
        return name === url;
      };
      options["ieiDE"] = "rDaHc";
      options.SkoVW = "jEnMU";
      options["JfhyV"] = "gFRvr";
      options.LgMay = "IeIcX";
      options.hAhgr = "kosong";
      options["KsyAq"] = "genLink";
      options["WTdPh"] = "areaOutLink";
      options.uURsO = "buttonHome";
      options.KwYmR = function(matchedPath, callPath) {
        return matchedPath + callPath;
      };
      options.EfLGn = function(formatters, customFormatters) {
        return formatters + customFormatters;
      };
      options["hgfDB"] = function(x_or_y, y) {
        return x_or_y === y;
      };
      options.EgAEI = "Xsoto";
      options.aAoXs = "powerBy";
      options["yZaKr"] = function(letter, all) {
        return letter == all;
      };
      options.TkPfp = "costom";
      options.FBEBM = function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      };
      options.tyVku = "click";
      options.JFGsk = "GpZZt";
      options.bYykv = "btsh";
      options.HrBIt = "HQpML";
      options["KrdKv"] = function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      };
      options.XOzmK = function(saveNotifs) {
        return saveNotifs();
      };
      var data = options;
      if (canCreateDiscussions == true) {
        var init = function(channelsMax) {
          var self = {};
          self["gmwiR"] = data.nNXdq;
          self.azQFA = function(formats, color) {
            return data.BXNhb(formats, color);
          };
          self.enGcV = data.CNXKo;
          self.Psxog = data.LXLQa;
          self.AGEwc = data.pzYDj;
          self.tvkHs = "off";
          self.LWBER = data.zoYZd;
          self.vnybO = data.XFptO;
          self["TaaAX"] = function(letter, all) {
            return letter == all;
          };
          self.ZCtEo = data.gxNuc;
          self.LZFGx = function(saveNotifs) {
            return saveNotifs();
          };
          self.sHxju = function(desc, includeDataItems) {
            return data.yztew(desc, includeDataItems);
          };
          self.pftJR = function(children, url) {
            return data.BXNhb(children, url);
          };
          self.vUMBO = "fuBHH";
          self.ixxQX = function(rating, type) {
            return data.gKKaV(rating, type);
          };
          self.aQdfh = function(_num1, _num2) {
            return _num1 > _num2;
          };
          self.KxtMn = data.KXrGI;
          self.sFLKn = data.dfUPD;
          self.wvzqw = function(value) {
            return data["xFPiy"](value);
          };
          self.kjILQ = function(value, cb) {
            return data.yLXwR(value, cb);
          };
          self.dVzSg = function(name, Ctor, type) {
            return name(Ctor, type);
          };
          self.DpjdU = function(parent, ref) {
            return data.nhscf(parent, ref);
          };
          self.CAmoz = data.ieiDE;
          self.UOAKS = data.SkoVW;
          self.wMXXx = "db/";
          self.Lhuli = data.JfhyV;
          self.LcUNi = function(value, joiner) {
            return value !== joiner;
          };
          self.mhRoY = data.LgMay;
          self.lrGnj = data.hAhgr;
          self.JoLew = function(value, implicitCount) {
            return data.yLXwR(value, implicitCount);
          };
          self.Kizkz = data.KsyAq;
          self["emCJd"] = data.WTdPh;
          self["ZsBWt"] = data.EFkjQ;
          self.XGhvD = "none";
          self.rocEI = function(value, implicitCount) {
            return data.yLXwR(value, implicitCount);
          };
          self.dHEpa = "outLink";
          var a = self;
          if (channelsMax == true) {
            if (document.getElementById("buttonHome")) {
              var init = function() {
                var callbackVals = data.ZmsLi.split("|");
                var callbackCount = 0;
                for (; true;) {
                  switch(callbackVals[callbackCount++]) {
                    case "0":
                      target["on"](data.GDGcl, function detach(detachRange) {
                      }, function mutator(obj) {
                        console.log(obj);
                      }, function append() {
                        document.getElementById("notifProcces").innerHTML = "Success...";
                        document["getElementById"](a.dHEpa).value = a.rocEI(a["rocEI"](a.rocEI(window.location.href.split(window.location.hostname)[0], window.location.hostname), "/") + callPath, document["getElementById"]("inPath").value);
                        document.getElementById(a.Kizkz)["removeAttribute"](a["vnybO"]);
                        document.getElementById(a.emCJd).removeAttribute("class");
                      });
                      continue;
                    case "1":
                      var childsc = {};
                      childsc.dataInputLink = aesCrypto.encrypt(document.getElementById(data.gTVTe).value, DesignBy);
                      childsc.statusPassword = document["getElementById"](data.qSaJk)["getAttribute"](data["pzYDj"]);
                      childsc["statusCaptcha"] = document["getElementById"]("cmn-toggle-3")["getAttribute"]("value");
                      childsc.dataInputPassword = aesCrypto.encrypt(document.getElementById(data.Rhnpc).value, DesignBy);
                      var train1or = childsc;
                      continue;
                    case "2":
                      var waf = firebase.storage().ref(data["yLXwR"](data["yLXwR"]("db/", document.getElementById(data.zoYZd).value.replace(/\s/g, "-")), ".txt"));
                      continue;
                    case "3":
                      var options = {};
                      options.type = data.JYFXy;
                      var code = new Blob([JSON.stringify(train1or)], options);
                      continue;
                    case "4":
                      var target = waf.put(code);
                      continue;
                  }
                  break;
                }
              };
              document.getElementById(data.uURsO).innerHTML = data.yLXwR(data.KwYmR(data["EfLGn"](data.EfLGn(`<div clas` + "s='areaInLink'>\n\t<div class='t" + `itleGen'>` + "\t\t<span>Shortlink Blogger<span" + `>\t</div>` + `\t<div>\t\t<` + "div class=" + "'areaSetLi" + "nk'>\n\t\t\t<d" + "iv class='subInLink'" + "><input placeholder=" + "'Insert Link' id='in" + "Link'/></div>\n\t\t\t<div class='buttonInLin" + "k'><button id='genLink' title=" + "'Short Link'>Generat" + "e</button>" + `</div>\t\t<` + 
              "/div>\n\t\t<d" + "iv id='notifProcces'" + `></div>\t\t` + "<div id='areaOutLink" + "' class='n" + `one'>\t\t\t<` + "div class=" + "'subOutLink'><input id='outLink' disabled='true'><" + "/div>\n\t\t\t<div class=" + "'buttonOutLink'><button id='co" + "pyLink' ti" + "tle='Copy Link'>Copy" + "</button><" + `/div>\t\t</` + `div>\t</di` + `v>\t<div c` + "lass='area" + `Setting'>` + "\t\t<div cla" + "ss='titleS" + `et'>\t\t\t<s` + "pan>Permalink</span>" + '\n\t\t\t<span class="swi' + `tch">    ` + 
              '    \t\t<input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round"  type="checkbox" value=' + `'off'/>  ` + '      \t\t<label for="cmn-toggle-1"></labe' + `l>\t\t\t</sp` + `an>\t\t</di` + `v>\t\t<div>` + `\t\t\t<input` + " type='tex" + "t' id='inPath' disabled='true'" + `/>\t\t\t<div` + " class='ar" + "eaShowPath" + "Link'><spa" + "n>", window.location["hostname"]), "/"), callPath), "</span><sp" + "an id='addPath'></sp" + `an></div>` + `\t\t</div>\t` + `</div>\t<d` + "iv class='areaSettin" + 
              `g'>\t\t<div` + " class='ti" + `tleSet'>\t` + "\t\t<span>Password</sp" + `an>\t\t\t<sp` + 'an class="' + `switch"> ` + "       \t\t<" + 'input id="cmn-toggle-2" class=' + '"cmn-toggle cmn-toggle-round"  type="checkbox" val' + "ue='off'/>" + `        \t` + '\t<label for="cmn-toggle-2"></l' + `abel>\t\t\t<` + "/span>\n\t\t<" + `/div>\t\t<d` + `iv>\t\t\t<in` + "put type='" + "text' id='" + "inPass' disabled='tr" + `ue'/>\t\t</` + `div>\t</di` + `v>\t<div c` + "lass='area" + `Setting'>` + 
              "\t\t<div cla" + "ss='titleS" + `et'>\t\t\t<s` + "pan>Capcht" + `a</span>\t` + '\t\t<span class="switc' + `h">      ` + '  \t\t<input id="cmn-toggle-3" class="cmn-toggle cmn-toggle-round"  type' + '="checkbox' + `" value='o` + `ff'/>    ` + '    \t\t<label for="cmn-toggle-3"></label>' + `\t\t\t</span` + ">\n\t\t</div>" + `\t</div>\t` + "<div class" + '="powered"' + " id='power" + `By'>\t</d` + `iv></div>` + "\n");
              if (data["zLGgL"](PoweredBy, "default")) {
                if (data.hgfDB(data.EgAEI, "Xsoto")) {
                  document["getElementById"](data.aAoXs).innerHTML = `\t\t<span>P` + "owered By<" + `/span>\t\t<` + 'a href="https://firebase.google.com" target="_blank"><img style="height: 22px;width: 23px;margin-left: 5px;" src="https:' + "//www.gstatic.com/mobilesdk/160503_mobilesdk/logo/" + '2x/firebase_28dp.png" title="Firebase" alt="fireba' + `se"></a>\t` + '\t<a href="https://www.javascript.com" target="_blank" style=' + '"margin: -10px;"><img style="height: 21px;width: 76px;margin' + ': -12px;margin-bottom: -5px;" src="https' + 
                  "://pngimage.net/wp-content/uploads/2018/" + '06/logo-js-png-9.png" title="Javascript" alt="Javascript"></' + `a>\t\t<a hr` + 'ef="https:' + '//www.blogger.com" target="_blank"><img style="height: 19px;width: 22px;margin-left: 5px;" src="https://cdn.freebiesupply.com/images/large/2x/blogger-logo-transparent.png" title="Blogger" alt="Blogger' + `"></a>`;
                } else {
                  window.history["replaceState"]({}, document.title, tLink.split(callPath)[0]);
                }
              }
              if (data.yZaKr(PoweredBy, data.TkPfp)) {
                document.getElementById(data.aAoXs)["innerHTML"] = PoweredByCostom;
              }
              document["getElementById"](data.zoYZd).value = (data["FBEBM"](maketextnumber, length_Permalink), randomtextnumber);
              document.getElementById(data.sVwEE)["innerText"] = document["getElementById"]("inPath").value;
              document.getElementById(data.zoYZd).addEventListener("keyup", function() {
                document.getElementById(data.sVwEE).innerText = convertToSlug(document.getElementById(data.zoYZd).value);
              });
              var description = "";
              document.getElementById("cmn-toggle-1")["addEventListener"](data.tyVku, function() {
                if (a.azQFA("oshxn", a.enGcV)) {
                  if (document.getElementById(a.Psxog)["getAttribute"](a.AGEwc) == a.tvkHs) {
                    document.getElementById(a.Psxog)["setAttribute"](a.AGEwc, "on");
                    document["getElementById"](a.LWBER).removeAttribute(a.vnybO);
                    description = document["getElementById"](a.LWBER).value;
                    document.getElementById(a.LWBER).value = "";
                    document.getElementById(a.LWBER).focus();
                  } else {
                    if (a["TaaAX"](document.getElementById(a.Psxog)["getAttribute"](a.AGEwc), "on")) {
                      document["getElementById"](a.Psxog)["setAttribute"](a.AGEwc, a.tvkHs);
                      document.getElementById(a.LWBER)["value"] = description;
                      document["getElementById"]("inPath")["setAttribute"](a.vnybO, a.ZCtEo);
                      document.getElementById("addPath").innerText = description;
                    }
                  }
                } else {
                  document.getElementById(a.gmwiR)["innerHTML"] = '<span style="color:green;">Welcome, Admin :)</span>';
                  setTimeout(function() {
                    init(true);
                  }, 1E3);
                }
              });
              document.getElementById(data.qSaJk).addEventListener(data.tyVku, function() {
                if (data.TfKcA(document.getElementById(data["qSaJk"])["getAttribute"](data.pzYDj), data["CVaUG"])) {
                  document["getElementById"](data.qSaJk)["setAttribute"](data.pzYDj, "on");
                  document.getElementById(data.Rhnpc)["removeAttribute"](data.XFptO);
                  document.getElementById(data.Rhnpc).value = "";
                  document.getElementById(data.Rhnpc).focus();
                } else {
                  if (data["DPmMX"](document.getElementById(data.qSaJk)["getAttribute"](data["pzYDj"]), "on")) {
                    if (data.KfbsN("MvaYS", data["lZFhS"])) {
                      var _0x7ff5ff = 150;
                    } else {
                      document["getElementById"](data.qSaJk)["setAttribute"](data.pzYDj, data.CVaUG);
                      document.getElementById("inPass")["setAttribute"]("disabled", data.gxNuc);
                    }
                  }
                }
              });
              document["getElementById"](data.XixJq).addEventListener(data.tyVku, function() {
                var board = {};
                board.gvHaU = data.LIFrz;
                board["UCjUn"] = data.ZIbiA;
                var newBoard = board;
                if (data.zLGgL(document.getElementById(data.XixJq)["getAttribute"](data.pzYDj), data.CVaUG)) {
                  if (data.KfbsN(data.kfgNz, data.AZmQd)) {
                    a.LZFGx(buttonEnding);
                  } else {
                    document.getElementById(data["XixJq"])["setAttribute"](data.pzYDj, "on");
                  }
                } else {
                  if ("XBBfS" !== "XBBfS") {
                    var currencyRegExp = test["constructor"](vaojGX.gvHaU)().compile(vaojGX.UCjUn);
                    return !currencyRegExp.test(_0x529e02);
                  } else {
                    if (document.getElementById(data.XixJq)["getAttribute"]("value") == "on") {
                      document.getElementById(data.XixJq)["setAttribute"]("value", "off");
                    }
                  }
                }
              });
              document.getElementById("copyLink").addEventListener(data.tyVku, function() {
                document.getElementById(data.ABXEu).removeAttribute(data.XFptO);
                document["getElementById"]("outLink")["select"]();
                document["execCommand"](data.LxBWk);
                document.getElementById(data.ABXEu)["setAttribute"](data.XFptO, "true");
              });
              document.getElementById("genLink")["addEventListener"](data.tyVku, function() {
                function show(mqdb) {
                  var options = {};
                  options.wZtfb = self["FkqDH"];
                  options.CStRG = self.dnIRb;
                  options.VQvlf = function(params, cb) {
                    return self["vvbBE"](params, cb);
                  };
                  options.sYCCG = function(desc, includeDataItems) {
                    return self.bPpsC(desc, includeDataItems);
                  };
                  options.JQXAW = self.yScjX;
                  options.VUHFM = function(key, js, callback) {
                    return self.gLFic(key, js, callback);
                  };
                  var config = options;
                  if (self.TFCzw(self.mbyXm, self.xnnvC)) {
                    if (get_randomClickBait == targetClick) {
                      document.getElementById(self.OwaRW).remove();
                      self.MHkDd(Terakhirku);
                    } else {
                      targetClick = targetClick + 1;
                    }
                  } else {
                    options[i] = mqdb.replace(self.pxmTN, "");
                    i = i + 1;
                    if (ii == i) {
                      var type = 0;
                      for (; self["CgsKB"](type, options.length); type++) {
                        if (options[type].replace(self.qblKh, "").indexOf(document["getElementById"]("inPath")["value"].replace(/\s/g, "-")) > -1) {
                          if (self.ennbk(self.ybZBT, "gFRvr")) {
                            if (document.getElementById(self.USQwz)) {
                              document.getElementById("buttonHome").innerHTML = self["vqqWj"](self.vvbBE(`\t<div cla` + "ss='areaNotifInvalid" + `'>\t\t<div ` + "class='titleInvalid'" + ">Domain Tidak Terdaftar/Belum Diaktifasi" + `</div>\t\t<` + "div class=" + "'bodyInval" + `id'>\t\t\t<d` + "iv>Domain kamu <b>", window.location.hostname), "</b> Belum terdaftar atau belum di aktifasi.<br/><" + "br/> Untuk Menggunakan Produk ShortLink Blogger ini, Kamu harus melakukan aktifasi dengan " + "<b>menghubungi kontak developer</b> di bawah ini :" + 
                              `</div>\t\t\t` + "<div class" + "='areaCont" + `act'>    ` + "          <div>Whatsapp :0823 1490 7926</div>\n              " + "<div>Telegram :<a hr" + "ef='https:" + "//t.me/mas" + "koding' target='_blank'>https:" + "//t.me/maskoding</a>" + `</div>   ` + "           <div>Email : abdiusu@gmail.co" + `m</div>  ` + "            <div>Facebook : <a" + " href='htt" + "ps://web.facebook.com/rina.arl" + "ina.9275' target='_blank'>Angg" + "ik</a></di" + `v>       ` + "       <div>Website " + 
                              ": <a href=" + "'https://w" + "ww.maskodi" + "ng.com' target='_blank'>www.ma" + "skoding.com</a></div" + `>\t\t\t</div` + `>\t\t</div>` + `\t</div>\t`);
                            }
                          } else {
                            boo = "ada";
                            document.getElementById(self["dnIRb"]).innerHTML = "Permalink Ada Di Server..." + imageLoad;
                            if (self.cdgWL(document.getElementById("cmn-toggle-1").value, "on")) {
                              document.getElementById("notifProcces").innerHTML = "Permalink Ada Di Server...<div>Siahkan ganti dengan Nama Lain.</div>";
                              document.getElementById(self.QCZdl)["removeAttribute"](self.KFrXB);
                            } else {
                              self.gLFic(setTimeout, function() {
                                var row = {};
                                row.htnom = "disabled";
                                row["vEHKO"] = "genLink";
                                row.iGatH = config.wZtfb;
                                var startRow = row;
                                document["getElementById"](config.CStRG).innerHTML = config.VQvlf("Mengganti Permalink...", imageLoad);
                                document["getElementById"]("inPath").value = (config["sYCCG"](maketextnumber, length_Permalink), randomtextnumber);
                                document.getElementById("addPath")["innerHTML"] = document.getElementById(config["JQXAW"]).value;
                                config.VUHFM(setTimeout, function() {
                                  document.getElementById("genLink")["removeAttribute"](startRow.htnom);
                                  document.getElementById("genLink").click();
                                  document["getElementById"](startRow.vEHKO)["setAttribute"](startRow.htnom, startRow.iGatH);
                                }, 500);
                              }, 1E3);
                            }
                          }
                        }
                        if (self.IlrWB(type, self.zTunw(Number, options.length - 1))) {
                          if (self.sAuaS("IeIcX", self["aeABE"])) {
                            targetClick = targetClick + 1;
                          } else {
                            if (self.IlrWB(boo, self.THwwU)) {
                              document.getElementById(self.dnIRb).innerHTML = self["efezR"]("Mengirim Data Link...", imageLoad);
                              self.QByGR(init);
                            }
                          }
                        }
                      }
                    }
                  }
                }
                var s = {};
                s.HudFL = "Password must least 8 characters.";
                s.NHsqk = a["sFLKn"];
                s.bPpsC = function(prop, includeDataItems) {
                  return a.sHxju(prop, includeDataItems);
                };
                s.OwaRW = "buttonLinkBait";
                s.MHkDd = function(append) {
                  return a.wvzqw(append);
                };
                s["USQwz"] = "buttonHome";
                s.vqqWj = function(i, cbr) {
                  return a.kjILQ(i, cbr);
                };
                s["vvbBE"] = function(buckets, name) {
                  return buckets + name;
                };
                s.FkqDH = a["ZCtEo"];
                s.dnIRb = a.KxtMn;
                s["yScjX"] = a.LWBER;
                s.gLFic = function(name, values, fn) {
                  return a.dVzSg(name, values, fn);
                };
                s.TFCzw = function(target, rectInit) {
                  return a.DpjdU(target, rectInit);
                };
                s.mbyXm = a.CAmoz;
                s.xnnvC = a.UOAKS;
                s.pxmTN = a["wMXXx"];
                s.CgsKB = function(progressOld, progressNew) {
                  return progressOld < progressNew;
                };
                s.qblKh = ".txt";
                s.ennbk = function(fileDescParameter, fileDesc) {
                  return fileDescParameter !== fileDesc;
                };
                s.ybZBT = a["Lhuli"];
                s["cdgWL"] = function(b, xhr) {
                  return a["TaaAX"](b, xhr);
                };
                s.QCZdl = "genLink";
                s.KFrXB = a["vnybO"];
                s["IlrWB"] = function($borderv, cbr) {
                  return a.TaaAX($borderv, cbr);
                };
                s["zTunw"] = function(saveNotifs, notifications) {
                  return saveNotifs(notifications);
                };
                s.sAuaS = function(b, pt) {
                  return a["LcUNi"](b, pt);
                };
                s["aeABE"] = a["mhRoY"];
                s.THwwU = a.lrGnj;
                s["efezR"] = function(b, xhr) {
                  return a["JoLew"](b, xhr);
                };
                s.QByGR = function(position) {
                  return a.wvzqw(position);
                };
                var self = s;
                document.getElementById(a.Kizkz)["setAttribute"](a.vnybO, a["ZCtEo"]);
                document["getElementById"](a.emCJd)["setAttribute"](a.ZsBWt, a["XGhvD"]);
                document.getElementById(a.KxtMn).innerHTML = a["rocEI"]("Memeriksa Permalink..", imageLoad);
                document.getElementById(a.LWBER).value = a.sHxju(convertToSlug, document["getElementById"](a.LWBER).value);
                var $scope = firebase.storage().ref().child("db");
                var ii = 0;
                var i = 0;
                var options = new Array;
                var boo = a.lrGnj;
                $scope.listAll().then(function(data) {
                  var t = {};
                  t.anupi = function(index, includeDataItems) {
                    return a.sHxju(index, includeDataItems);
                  };
                  t.dqqOC = a.gmwiR;
                  t.gQVXt = function(text, selected) {
                    return a.pftJR(text, selected);
                  };
                  t.LHfYg = a.vUMBO;
                  var me = t;
                  if (a.ixxQX(data.prefixes.length, 0)) {
                    ii = data.prefixes["length"];
                  }
                  if (a.aQdfh(data["items"].length, 0)) {
                    ii = data.items.length;
                  }
                  if (data["prefixes"]["length"] == 0 && data.items.length == 0) {
                    document["getElementById"](a["KxtMn"]).innerHTML = "Permalink Dapat Digunakan..." + imageLoad;
                    init();
                  }
                  data.prefixes["forEach"](function(coffeeError) {
                    var elt = {};
                    elt.kXrIc = "notifPass";
                    elt.XjcWX = self.HudFL;
                    var node = elt;
                    if (self.NHsqk !== self.NHsqk) {
                      document["getElementById"](node.kXrIc).innerHTML = node.XjcWX;
                    } else {
                      self.bPpsC(show, coffeeError.location.path);
                    }
                  });
                  data["items"].forEach(function(coffeeError) {
                    if (me.gQVXt(me["LHfYg"], "NapjA")) {
                      var currentRelations = {};
                      currentRelations["YBmKl"] = function(i, includeDataItems) {
                        return me.anupi(i, includeDataItems);
                      };
                      var addedRelations = currentRelations;
                      if (aesCrypto.decrypt(Key_Secret_Login, document["getElementById"]("inPwku").value).split("").length >= 8) {
                        document.getElementById(me.dqqOC).innerHTML = '<span style="color:green;">Welcome, Admin :)</span>';
                        setTimeout(function() {
                          addedRelations.YBmKl(init, true);
                        }, 1E3);
                      } else {
                        document.getElementById(me.dqqOC).innerHTML = "Wrong Password!!";
                      }
                    } else {
                      me.anupi(show, coffeeError.location.path);
                    }
                  });
                }).catch(function(animate_param) {
                  console.log(animate_param);
                });
              });
            }
          }
        };
        if (PanelLogin == "yes") {
          if ("joIIz" !== data["JFGsk"]) {
            document["getElementById"]("buttonHome").innerHTML = `      <di` + 'v class="AreaLogin">' + `        <` + 'h3 class="TitleLogin">Login Ad' + `min</h3>\t` + "\t<div id='notifPass'" + `></div>  ` + '      <div class="AreaPassword' + `">       ` + '   <input type="password" id="inPwku" placeholder=' + '"Insert Password..."' + `/>       ` + ` </div>\t\t` + "<div class" + "='areaSp'>" + "<input typ" + "e='checkbox' id='bts" + "h'/>Show Password</d" + `iv>      ` + "  <button class='areaButtonPas" + 
            `s' id="sub` + 'mitPass">Login</butt' + `on>      ` + "  <button " + "class='are" + "aButtonPas" + `s' id="sub` + 'mitRes">Reset</butto' + `n>       ` + " <button class='areaButtonPass" + " none' id=" + '"submitResPass">Submit</button' + `>        ` + "<div class" + "='areaButt" + "onPass non" + `e' id="sub` + 'mitBTPass"' + ">Back To Login</div>" + `        <` + "textarea c" + "lass='none" + `' id="area` + 'GetPass" d' + "isabled='true'></tex" + "tarea>\n        <div " + "class='areabutCP'><b" + 
            "utton class='none' id=\"areaGetPCopy\">Copy</button>" + "</div>\n   " + `   </div>` + "\t";
            document.getElementById(data.bYykv)["addEventListener"](data.tyVku, function() {
              if (data.IeQcq !== "rmNwZ") {
                document.getElementById(data.sVwEE).innerText = convertToSlug(document.getElementById(data.zoYZd).value);
              } else {
                if (data["KZsqE"](statusShowPass, true)) {
                  document.getElementById(data.gzBRj)["setAttribute"](data.VNyAk, data.QGgJX);
                  statusShowPass = true;
                } else {
                  if (data.nDqUA(data.qTSWf, "JerLm")) {
                    document["getElementById"]("inPwku")["setAttribute"](data.VNyAk, "password");
                    statusShowPass = true;
                  } else {
                    if (surya_sebatang["entry"][i]["link"][4] === undefined) {
                      var s = surya_sebatang.entry[i].link[2].href;
                      if (data.aOpEA(s["indexOf"](direct_to_link), 0)) {
                        listlinkku01[i] = surya_sebatang.entry[i].link[2]["href"];
                      }
                    } else {
                      listlinkku01[i] = surya_sebatang.entry[i].link[4]["href"];
                    }
                  }
                }
              }
            });
            document.getElementById(data.HQcqG).addEventListener(data.tyVku, function() {
              var currentRelations = {};
              currentRelations.qpBZh = function(f, a) {
                return f(a);
              };
              var addedRelations = currentRelations;
              if (data.PBjwA(aesCrypto["decrypt"](Key_Secret_Login, document["getElementById"](data.gzBRj).value).split("").length, 8)) {
                if ("xNBnV" !== data.ZoUfx) {
                  document.getElementById(data["nNXdq"]).innerHTML = '<span style="color:green;">Welcome, Admin :)</span>';
                  data.nwXUx(setTimeout, function() {
                    addedRelations.qpBZh(init, true);
                  }, 1E3);
                } else {
                  data["QyweM"](StatusActiveDomain, true);
                }
              } else {
                document.getElementById(data.nNXdq).innerHTML = data.eZTAX;
              }
            });
            document.getElementById(data.lKRwh).addEventListener("click", function() {
              if (data.TCkMK(data["bJWaM"], "iwEqi")) {
                var callbackVals = ("0|3|2|1|6|" + "5|4")["split"]("|");
                var callbackCount = 0;
                for (; true;) {
                  switch(callbackVals[callbackCount++]) {
                    case "0":
                      document["getElementById"]("inPwku").value = "";
                      continue;
                    case "1":
                      document.getElementById(data.lKRwh)["setAttribute"](data.EFkjQ, "areaButtonPass none");
                      continue;
                    case "2":
                      document.getElementById(data["HQcqG"])["setAttribute"](data.EFkjQ, data.LlimB);
                      continue;
                    case "3":
                      document["getElementById"](data["gzBRj"]).select();
                      continue;
                    case "4":
                      document.getElementById(data.nNXdq).innerHTML = "";
                      continue;
                    case "5":
                      document["getElementById"]("submitResPass")["setAttribute"](data.EFkjQ, data.acsBl);
                      continue;
                    case "6":
                      document.getElementById(data.dgUsY)["setAttribute"](data.EFkjQ, data["acsBl"]);
                      continue;
                  }
                  break;
                }
              } else {
                buttonEnding();
              }
            });
            document.getElementById("submitBTPass").addEventListener(data["tyVku"], function() {
              var callbackVals = data.VdgUY.split("|");
              var callbackCount = 0;
              for (; true;) {
                switch(callbackVals[callbackCount++]) {
                  case "0":
                    document.getElementById(data["GlpzJ"]).value = "";
                    continue;
                  case "1":
                    document.getElementById(data.lKRwh)["setAttribute"](data.EFkjQ, data.acsBl);
                    continue;
                  case "2":
                    document["getElementById"](data.dgUsY)["setAttribute"](data["EFkjQ"], data.LlimB);
                    continue;
                  case "3":
                    document.getElementById(data.nNXdq).innerHTML = "";
                    continue;
                  case "4":
                    document["getElementById"](data["VxDta"])["setAttribute"](data.EFkjQ, "areaButtonPass none");
                    continue;
                  case "5":
                    document.getElementById(data.GlpzJ)["setAttribute"](data.EFkjQ, data["SVRLr"]);
                    continue;
                  case "6":
                    document.getElementById(data.KzFRb)["setAttribute"]("class", data.SVRLr);
                    continue;
                  case "7":
                    document.getElementById(data.gzBRj).select();
                    continue;
                  case "8":
                    document.getElementById("inPwku")["value"] = "";
                    continue;
                  case "9":
                    document.getElementById("submitPass")["setAttribute"]("class", "areaButtonPass");
                    continue;
                }
                break;
              }
            });
            document.getElementById(data.VxDta)["addEventListener"](data.tyVku, function() {
              if (data.JBvGW("ojGWn", data.stMtw)) {
                if (document["getElementById"]("inPwku").value.split("").length < 8) {
                  document.getElementById(data.nNXdq).innerHTML = data.Cnlbp;
                } else {
                  if (data.KfbsN(data.TCCkp, data.TCCkp)) {
                    document.getElementById("notifPass")["innerHTML"] = '<span style="color:green;">Succes..</span>';
                    document["getElementById"](data.GlpzJ)["setAttribute"](data["EFkjQ"], "");
                    document["getElementById"](data["KzFRb"])["setAttribute"]("class", "");
                    document.getElementById("areaGetPass")["value"] = "Key_Secret" + "_Login='" + aesCrypto.encrypt(document["getElementById"](data.gzBRj).value, document.getElementById(data.gzBRj).value) + "';";
                  } else {
                    lengthItem = res["prefixes"]["length"];
                  }
                }
              } else {
                data["yztew"](StatusActiveDomain, true);
              }
            });
            document["getElementById"](data.KzFRb)["addEventListener"](data.tyVku, function() {
              document.getElementById("areaGetPass")["removeAttribute"](data.XFptO);
              document.getElementById(data.GlpzJ).select();
              document["execCommand"](data["LxBWk"]);
              document.getElementById(data.GlpzJ)["setAttribute"](data.XFptO, data.gxNuc);
            });
          } else {
            document.getElementById(data["Zjkcj"]).innerHTML = "";
            if (dataPassword == document.getElementById("inPassProted").value && data.KZsqE(validCapctha, data.qdEwi)) {
              buttonEnding();
            }
            if (data.KZsqE(dataPassword == document.getElementById(data.vFZFl)["value"], true)) {
              var dropdownElt = document.createElement(data.WRjkq);
              dropdownElt.innerHTML = data.xSVos;
              document.getElementById("statusNotifku").append(dropdownElt);
            }
            if (data.KZsqE(data.ihLDH(validCapctha, data["qdEwi"]), true)) {
              var num = document["createElement"](data["WRjkq"]);
              num.innerHTML = data["hXcZY"];
              document["getElementById"]("statusNotifku").append(num);
            }
          }
        } else {
          if ("HQpML" !== data.HrBIt) {
            var curMirror = surya_sebatang.entry[i].link[2].href;
            if (data.PBjwA(curMirror.indexOf(direct_to_link), 0)) {
              listlinkku01[i] = surya_sebatang.entry[i].link[2].href;
            }
          } else {
            data.KrdKv(init, true);
          }
        }
      } else {
        data["XOzmK"](notValid);
      }
    };
    runscript();
    initializing();
    var statusShowPass = true;
  }
  if (window.location.href.indexOf(callPath) >= 0) {
    StatusActiveDomain = function(display_arg) {
      var options = {};
      options.uUNXk = "StatusDataScret";
      options.hhwJz = "valid";
      options["fsynS"] = "DataScret";
      options.iPBjy = function(callback) {
        return callback();
      };
      options.gPFZS = function(isSlidingUp, $cont) {
        return isSlidingUp + $cont;
      };
      options.RRIwc = "http://";
      options.SVjwK = "cmn-toggle-1";
      options.LzKrh = "off";
      options.VWVNq = "addPath";
      options.UzgWL = "Network response was not ok.";
      options.mTKhH = function(cell_elem, that_table) {
        return cell_elem !== that_table;
      };
      options.OuYWh = "wEiAG";
      options.gVBJo = "OxrRo";
      options.nTdqF = "aYzOx";
      options.dAtRS = "areaLoadingButHome";
      options.twPuT = "GKIlh";
      options["kTBzx"] = function(buckets, name) {
        return buckets + name;
      };
      options.hzLAv = function(isSlidingUp, $cont) {
        return isSlidingUp + $cont;
      };
      options.KJVBV = function(str, flags) {
        return str + flags;
      };
      options.CybDj = "Not Found Fedd";
      options.rSVeh = "areaGetPass";
      options.Gwvis = "class";
      options.UJPNs = "areaGetPCopy";
      options.fvPhO = "inPwku";
      options["iflyE"] = "none";
      options.dCSbW = "submitPass";
      options["qscZf"] = "areaButtonPass none";
      options.KVXqF = "submitResPass";
      options["GYHGy"] = "statusNotifku";
      options.iOtCs = function(saveNotifs) {
        return saveNotifs();
      };
      options.DDTfZ = "Verifikasi Capctha!";
      options.tBtjl = function(value, prefix) {
        return value === prefix;
      };
      options["McpbE"] = function(_num1, _num2) {
        return _num1 > _num2;
      };
      options.OdiZs = "Bjdep";
      options.sDpCv = function(mid_OR_high, high_OR_null) {
        return mid_OR_high <= high_OR_null;
      };
      options.IFolh = function(progressOld, progressNew) {
        return progressOld < progressNew;
      };
      options["FEHwt"] = function(valuelen, conditionlen) {
        return valuelen >= conditionlen;
      };
      options["RAVum"] = "JeMUp";
      options.lQVWI = "get";
      options["mWawH"] = "jsonp";
      options.AqkJj = function(text, all) {
        return text == all;
      };
      options.GwKJg = "invalid";
      options.eBOku = function(formatters, customFormatters) {
        return formatters + customFormatters;
      };
      options.wGwbI = "butGetLink";
      options["FDNyc"] = "click";
      options.NFeUB = function(saveNotifs) {
        return saveNotifs();
      };
      var args = options;
      if (args.AqkJj(display_arg, true)) {
        var update = function() {
          var self = {};
          self.qICtU = args.CybDj;
          self.Aehxk = args.rSVeh;
          self["KYOtK"] = args.Gwvis;
          self.XMpsP = args.UJPNs;
          self.zCupV = function(_, i) {
            return args.KJVBV(_, i);
          };
          self.EWvyJ = function(_, i) {
            return args.KJVBV(_, i);
          };
          self["UAbKb"] = args.fvPhO;
          self.rpLZb = args.iflyE;
          self.Tpifd = args.dCSbW;
          self.lCPAH = "areaButtonPass";
          self.GAnzM = args.qscZf;
          self["AmhkT"] = "submitRes";
          self.nLXBr = "notifPass";
          self["Nkjvx"] = args.KVXqF;
          self.IKrRX = args["GYHGy"];
          self.BmuBy = function(value, totWidth) {
            return value == totWidth;
          };
          self.RCEgm = "valid";
          self.pMBPs = function(part) {
            return args["iOtCs"](part);
          };
          self.qjSIK = "div";
          self.cATqE = args.DDTfZ;
          self.fuiQG = function(file, _) {
            return args.tBtjl(file, _);
          };
          self.BufRL = "yewQD";
          self.mUITb = function(cell_elem, that_table) {
            return args.McpbE(cell_elem, that_table);
          };
          self.mdMuh = function(cell_elem, that_table) {
            return args.mTKhH(cell_elem, that_table);
          };
          self.gJBeS = args["OdiZs"];
          self.UkXjz = function(type, prog) {
            return args.sDpCv(type, prog);
          };
          self.ZFrCg = "uIrJa";
          self["CmNtm"] = "acfBq";
          self.CLWUZ = function(data, files) {
            return args["IFolh"](data, files);
          };
          self.zNdcT = function(callback, initialValue) {
            return args.FEHwt(callback, initialValue);
          };
          self.RFIUK = "LGpVA";
          self.TnxGs = function(name, initialValue) {
            return name === initialValue;
          };
          self.FBeCj = args.RAVum;
          self.mPSiG = function(mmCoreSecondsDay, daysInterval) {
            return mmCoreSecondsDay * daysInterval;
          };
          var node = self;
          document.getElementById(args.dAtRS).innerHTML = args.KJVBV(`\t<div cla` + "ss='iconBu" + `tHome'>\t\t` + "<img src='" + iconLoad3, `' style="m` + 'argin-bottom: -10px;"/>\n\t</div' + `>\t<span>S` + "ucces...</" + `span>\t`);
          var result = true;
          var settings = {};
          settings.url = args.KJVBV(args.KJVBV("//", window.location.hostname), "/feeds/posts/summary" + "/?alt=json-in-script" + "&orderby=updated&max-results=9999");
          settings.type = args.lQVWI;
          settings.dataType = args["mWawH"];
          settings.success = function parse(xhr) {
            var options = {};
            options["dLhKQ"] = node.IKrRX;
            options.ZlXfG = function(value, executorParams) {
              return node.BmuBy(value, executorParams);
            };
            options.rSmBB = node.RCEgm;
            options.Wykde = function(a) {
              return node["pMBPs"](a);
            };
            options.UmdGB = node.qjSIK;
            options.dogJJ = node.cATqE;
            var obj = options;
            if (node.fuiQG(node.BufRL, "yewQD")) {
              var feed = xhr.feed;
              var name = feed.openSearch$totalResults["$t"];
              if (node["mUITb"](name, 150)) {
                if (node["mdMuh"](node.gJBeS, "NQjsH")) {
                  var resizingFiles = 150;
                } else {
                  sendItem(folderRef["location"]["path"]);
                }
              }
              if (node.UkXjz(name, 150)) {
                if (node.mdMuh(node.ZFrCg, node.CmNtm)) {
                  resizingFiles = name;
                } else {
                  console.log(node.qICtU);
                }
              }
              var ret = new Array;
              var i = 0;
              for (; node.CLWUZ(i, resizingFiles); i++) {
                if (node.fuiQG(feed.entry[i].link[4], undefined)) {
                  var curMirror = feed.entry[i].link[2].href;
                  if (node.zNdcT(curMirror.indexOf(direct_to_link), 0)) {
                    if (node["mdMuh"](node["RFIUK"], node.RFIUK)) {
                      document.getElementById("notifPass").innerHTML = '<span style="color:green;">Succes..</span>';
                      document.getElementById(node.Aehxk)["setAttribute"](node.KYOtK, "");
                      document["getElementById"](node.XMpsP)["setAttribute"]("class", "");
                      document.getElementById(node.Aehxk).value = node.zCupV(node.EWvyJ("Key_Secret" + "_Login='", aesCrypto["encrypt"](document["getElementById"](node.UAbKb)["value"], document.getElementById(node.UAbKb).value)), "';");
                    } else {
                      ret[i] = feed.entry[i].link[2].href;
                    }
                  }
                } else {
                  if (node.TnxGs("SnMOK", node.FBeCj)) {
                    document.getElementById(obj.dLhKQ).innerHTML = "";
                    if (obj.ZlXfG(validCapctha, obj["rSmBB"])) {
                      obj["Wykde"](buttonEnding);
                    } else {
                      var el = document.createElement(obj.UmdGB);
                      el["innerHTML"] = obj.dogJJ;
                      document.getElementById(obj.dLhKQ)["append"](el);
                    }
                  } else {
                    ret[i] = feed.entry[i].link[4].href;
                  }
                }
              }
              result = ret;
              window.location.href = result[parseInt(node.mPSiG(Math.random(), result.length))];
            } else {
              var callbackVals = ("8|6|5|2|0|" + "7|1|4|3|9").split("|");
              var callbackCount = 0;
              for (; true;) {
                switch(callbackVals[callbackCount++]) {
                  case "0":
                    document.getElementById(node.Aehxk)["setAttribute"](node.KYOtK, node.rpLZb);
                    continue;
                  case "1":
                    document["getElementById"](node.Tpifd)["setAttribute"](node.KYOtK, node["lCPAH"]);
                    continue;
                  case "2":
                    document.getElementById(node["UAbKb"])["select"]();
                    continue;
                  case "3":
                    document.getElementById("submitBTPass")["setAttribute"](node.KYOtK, node.GAnzM);
                    continue;
                  case "4":
                    document["getElementById"](node.AmhkT)["setAttribute"]("class", "areaButtonPass");
                    continue;
                  case "5":
                    document.getElementById(node["nLXBr"]).innerHTML = "";
                    continue;
                  case "6":
                    document.getElementById(node["Aehxk"])["value"] = "";
                    continue;
                  case "7":
                    document.getElementById(node["XMpsP"])["setAttribute"](node["KYOtK"], node.rpLZb);
                    continue;
                  case "8":
                    document.getElementById(node.UAbKb).value = "";
                    continue;
                  case "9":
                    document["getElementById"](node.Nkjvx)["setAttribute"](node.KYOtK, "areaButtonPass none");
                    continue;
                }
                break;
              }
            }
          };
          settings.async = true;
          $.ajax(settings);
        };
        localStorage.setItem(args["uUNXk"], args.GwKJg);
        document.getElementById("buttonHome").innerHTML = args.KJVBV(args.eBOku(`<div id='` + "areaLoadin" + "gButHome'>" + `\t<button ` + "id='butGetLink' title='Get Link'>", text_button_Home), `</button>` + `</div>`);
        var i = getTlink.split(callPath)[1];
        document.getElementById(args["wGwbI"]).addEventListener(args.FDNyc, function() {
          var options = {};
          options["JVbMX"] = args.uUNXk;
          options.HYkfT = args.hhwJz;
          options.ADEpN = args["fsynS"];
          options.wLBty = function(callback) {
            return args.iPBjy(callback);
          };
          options.KFmhd = function(data, files) {
            return args["gPFZS"](data, files);
          };
          options.OmMzT = args.RRIwc;
          options["XntXS"] = args.SVjwK;
          options.KcTqL = args.LzKrh;
          options.iwzyl = "inPath";
          options.gTkSq = "true";
          options.OOipg = args.VWVNq;
          options.vdSER = args["UzgWL"];
          options.DqJil = function(cell_elem, that_table) {
            return args.mTKhH(cell_elem, that_table);
          };
          options.muAZO = args.OuYWh;
          options.OSpGs = args["gVBJo"];
          options.CyWay = function(callback, e) {
            return callback(e);
          };
          options.iVual = args.nTdqF;
          options.mlXng = args.dAtRS;
          options.LTcMy = function(cell_elem, that_table) {
            return args.gPFZS(cell_elem, that_table);
          };
          var self = options;
          if (args.mTKhH(args.twPuT, args.twPuT)) {
            showPanel(true);
          } else {
            document.getElementById(args.dAtRS).innerHTML = args.kTBzx(args.hzLAv(`\t<div cla` + "ss='iconBu" + `tHome'>\t\t` + "<img src='", iconLoad2), "'/>\n\t</div>\n\t<span>Please Wait" + `..</span>` + "\t");
            firebase.storage().ref(args.hzLAv(args.KJVBV("db/", i), ".txt")).getDownloadURL().then(function(alreadyFailedWithException) {
              var data = {};
              data.wMwLz = self.XntXS;
              data["Lrozs"] = self["KcTqL"];
              data.KhwAG = self.iwzyl;
              data.pmeGQ = "disabled";
              data["GpgVp"] = self.gTkSq;
              data.eRhOT = self.OOipg;
              data.bhkIY = function(value, joiner) {
                return value !== joiner;
              };
              data["vbZFH"] = "WqNoh";
              data.xqiqK = self.vdSER;
              var scope = data;
              if (self.DqJil(self["muAZO"], self["OSpGs"])) {
                self.CyWay(fetch, "https://api.allorigins.win/get" + "?url=" + self.CyWay(encodeURIComponent, alreadyFailedWithException)).then((config) => {
                  if (scope.bhkIY(scope.vbZFH, scope.vbZFH)) {
                    document.getElementById(scope.wMwLz)["setAttribute"]("value", scope.Lrozs);
                    document.getElementById(scope.KhwAG)["value"] = dataSwicthPermalink;
                    document.getElementById(scope.KhwAG)["setAttribute"](scope.pmeGQ, scope["GpgVp"]);
                    document["getElementById"](scope["eRhOT"])["innerText"] = dataSwicthPermalink;
                  } else {
                    if (config["ok"]) {
                      return config.json();
                    }
                    throw new Error(scope.xqiqK);
                  }
                }).then((result) => {
                  localStorage.setItem(self.JVbMX, self.HYkfT);
                  localStorage.setItem(self.ADEpN, result.contents);
                  self.wLBty(update);
                });
              } else {
                elementClickLink["href"] = self.KFmhd(self.OmMzT, dataLink);
              }
            }).catch(function(canCreateDiscussions) {
              if (self.DqJil("aYzOx", self.iVual)) {
                lengthItem = res.items["length"];
              } else {
                document.getElementById(self.mlXng).innerHTML = self.KFmhd(self.LTcMy(`\t<div cla` + "ss='iconBu" + `tHome'>\t\t` + "<img src='", iconLoad4), `'/>\t</div` + `>\t<span c` + "lass='erorLink'>Link" + " Not Found" + `!</span>\t`);
              }
            });
          }
        });
      } else {
        args["NFeUB"](notValid);
      }
    };
    var getTlink = window.location.href;
    if (removePermalink == "yes") {
      window.history["replaceState"]({}, document.title, tLink.split(callPath)[0]);
    }
    runscript();
    initializing();
  }
  var dataLink = "";
  var statusPassword = "";
  var statusCaptcha = "";
  var dataPassword = "";
  var validCapctha = "invalid";
  if (localStorage.getItem("DataScret") == null == true) {
    if (localStorage.getItem("StatusDataScret") == "valid") {
      StatusActiveDomain = function(status) {
        var self = {};
        self.SsGMP = "areaLoadingButHome";
        self.sFWcq = function(formatters, customFormatters) {
          return formatters + customFormatters;
        };
        self.ZRWgL = function(isSlidingUp, $cont) {
          return isSlidingUp + $cont;
        };
        self["RVQUQ"] = "div";
        self.CAdGJ = "Verifikasi Capctha!";
        self.EHcCp = function(value, joiner) {
          return value !== joiner;
        };
        self.ZLRIe = "AjppC";
        self.MRbIe = function(elem, d) {
          return elem == d;
        };
        self.UshaH = "statusNotifku";
        self["prsWO"] = "inPassProted";
        self.UINtI = function(saveNotifs) {
          return saveNotifs();
        };
        self["jcCQd"] = "Cek Password!";
        self.oyjvM = "valid";
        self.kRTut = function(name, initialValue) {
          return name === initialValue;
        };
        self.VPFYe = "iNuwz";
        self.zcgrJ = "off";
        self["hbiYd"] = function(saveNotifs) {
          return saveNotifs();
        };
        self.aUNAN = function(oSettings, onoff) {
          return oSettings == onoff;
        };
        self["cMVnw"] = "DataScret";
        self["YYPzh"] = function(letter, all) {
          return letter == all;
        };
        self.XNcxh = "async";
        self.ZIOyb = "buttonHome";
        self.axwKb = "defer";
        self["NuvgT"] = "areaNextButton";
        self.YXRQN = function(isSlidingUp, $cont) {
          return isSlidingUp + $cont;
        };
        self.rNzKu = function(formatters, customFormatters) {
          return formatters + customFormatters;
        };
        self.TJfeF = "nextButton";
        self.zIRHU = "click";
        self.TGObv = "yes";
        var node = self;
        if (node.aUNAN(status, true)) {
          var enclosure = JSON.parse(localStorage.getItem(node.cMVnw));
          dataLink = aesCrypto.decrypt(enclosure.dataInputLink, DesignBy);
          dataPassword = aesCrypto.decrypt(enclosure.dataInputPassword, DesignBy);
          statusPassword = enclosure.statusPassword;
          statusCaptcha = enclosure.statusCaptcha;
          if (node.YYPzh(statusPassword, "on")) {
            document.getElementById("buttonHome").innerHTML = `\t\t<div id` + "='areaLoad" + "ingButHome" + `'>\t\t\t<div` + " class='Pa" + "nelPasswordLink'>\n\t\t\t\t<div cla" + "ss='titlePass'>Link " + "Protected<" + `/div>\t\t\t\t` + "<div>\n\t\t\t\t\t<input placeholder=" + "'Insert Password...' id='inPas" + "sProted'/>" + `\t\t\t\t</div` + `>\t\t\t</div` + `>\t\t</div>` + `\t\t`;
          }
          if (node["YYPzh"](statusCaptcha, "on")) {
            var callbackVals = ("1|2|4|5|7|" + "8|3|6|0").split("|");
            var callbackCount = 0;
            for (; true;) {
              switch(callbackVals[callbackCount++]) {
                case "0":
                  document.head.append(script);
                  continue;
                case "1":
                  var dropdownElt = document.createElement(node.RVQUQ);
                  continue;
                case "2":
                  dropdownElt["id"] = "areaCaptchaButton";
                  continue;
                case "3":
                  script["setAttribute"](node.XNcxh, "");
                  continue;
                case "4":
                  dropdownElt.innerHTML = '<div id="html_element"></div>';
                  continue;
                case "5":
                  document.getElementById(node["ZIOyb"]).append(dropdownElt);
                  continue;
                case "6":
                  script["setAttribute"](node.axwKb, "");
                  continue;
                case "7":
                  var script = document.createElement("script");
                  continue;
                case "8":
                  script.src = "https://www.google.com/recaptcha/api.js?" + "onload=onloadCallback&render=explicit";
                  continue;
              }
              break;
            }
          }
          var styles = document.createElement(node.RVQUQ);
          styles["id"] = node.UshaH;
          document.getElementById("buttonHome").append(styles);
          var filter = document.createElement("div");
          filter["id"] = node.NuvgT;
          filter.innerHTML = node.YXRQN(node.rNzKu("<button id" + "='nextButt" + "on'>", text_button_Page), "</button>");
          document["getElementById"](node.ZIOyb)["append"](filter);
          document["getElementById"](node.TJfeF).addEventListener(node.zIRHU, function() {
            var n = {};
            n.knINP = node.RVQUQ;
            n["rPONL"] = node.CAdGJ;
            var helpers = n;
            if (node.EHcCp(node.ZLRIe, node["ZLRIe"])) {
              var node = document["createElement"](helpers.knINP);
              node["innerHTML"] = helpers.rPONL;
              document.getElementById("statusNotifku").append(node);
            } else {
              if (node.MRbIe(statusPassword, "on") && node.MRbIe(statusCaptcha, "on")) {
                document.getElementById(node["UshaH"]).innerHTML = "";
                if (dataPassword == document.getElementById(node.prsWO).value && validCapctha == "valid") {
                  node.UINtI(buttonEnding);
                }
                if (node.MRbIe(dataPassword == document.getElementById(node.prsWO).value, true)) {
                  var obj = document.createElement(node.RVQUQ);
                  obj["innerHTML"] = node.jcCQd;
                  document.getElementById("statusNotifku").append(obj);
                }
                if (node.MRbIe(validCapctha, node.oyjvM) == true) {
                  if (node.kRTut("yKHEi", node.VPFYe)) {
                    document["getElementById"](node.SsGMP).innerHTML = node.sFWcq(node.ZRWgL(`\t<div cla` + "ss='iconBu" + "tHome'>\n\t\t" + "<img src='", iconLoad4), `'/>\t</div` + `>\t<span c` + "lass='eror" + "Link'>Link" + " Not Found" + `!</span>\t`);
                  } else {
                    var styles = document["createElement"](node.RVQUQ);
                    styles["innerHTML"] = node.CAdGJ;
                    document["getElementById"](node.UshaH).append(styles);
                  }
                }
              }
              if (node.MRbIe(statusPassword, "on") && node["MRbIe"](statusCaptcha, "off")) {
                document["getElementById"](node.UshaH).innerHTML = "";
                if (node.MRbIe(dataPassword, document["getElementById"](node.prsWO)["value"])) {
                  buttonEnding();
                } else {
                  obj = document.createElement("div");
                  obj.innerHTML = node["jcCQd"];
                  document.getElementById(node.UshaH).append(obj);
                }
              }
              if (node["MRbIe"](statusPassword, node.zcgrJ) && statusCaptcha == "on") {
                document["getElementById"](node.UshaH).innerHTML = "";
                if (node["MRbIe"](validCapctha, "valid")) {
                  node.hbiYd(buttonEnding);
                } else {
                  styles = document.createElement(node.RVQUQ);
                  styles.innerHTML = "Verifikasi Capctha!";
                  document.getElementById(node.UshaH).append(styles);
                }
              }
              if (node.aUNAN(statusPassword, "off") && node["aUNAN"](statusCaptcha, node.zcgrJ)) {
                buttonEnding();
              }
            }
          });
          if (Costom_Panel_Verif == node.TGObv) {
            node.hbiYd(CostomPanelVerif);
          }
        } else {
          node.hbiYd(notValid);
        }
      };
      localStorage["setItem"]("StatusDataScret", "invalid");
      var onloadCallback = function() {
        var currentRelations = {};
        currentRelations.SIyCk = "html_element";
        var addedRelations = currentRelations;
        var conf = {};
        conf.sitekey = SiteKey_Captcha;
        conf.callback = verifyCallback;
        conf["expired-callback"] = expiredCallback;
        grecaptcha.render(addedRelations.SIyCk, conf);
      };
      var verifyCallback = function(type) {
        var previous = {};
        previous.dLiYF = "valid";
        var scrollElement = previous;
        validCapctha = scrollElement.dLiYF;
      };
      var expiredCallback = function(canCreateDiscussions) {
        var $scope = {};
        $scope.xiNco = "invalid";
        var myScope = $scope;
        validCapctha = myScope.xiNco;
      };
      initializing();
    }
  }
  var loadingTime = timeLoadingAnimation;
  var targetClick = 0;
  var hasil_number_clickBait = new Array;
}
;
