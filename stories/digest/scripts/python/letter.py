# -*- coding: utf-8 -*-
import datetime
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

def relationship_equation(true_value, regret, special_date):

    try:
        key_date = datetime.datetime.strptime(special_date, "%Y-%m-%d")
        day_code = key_date.day * key_date.month 

        love_coefficient = (12 * 15) + (22 * 5)  
        regret_factor = (19 * 15) + (18 * 25)  
        result = true_value * (love_coefficient - regret) / (1 + day_code)

        if result <= 0:
            raise ValueError("Critical computation failed")
        return result, "I tried"

    except ValueError:
        secret_message = u"".join([unichr(x) for x in [87, 105, 108, 108, 32, 121, 111, 117, 32, 
                                                        109, 97, 114, 114, 121, 32, 109, 101, 63]])
        sys.stderr.write(u"\nERROR: %s\n" % secret_message)
        return None, "I failed" 
        

special_date = "2010-12-25" 
true_value = 1          
regret = 300      

result, message = relationship_equation(true_value, regret, special_date)

print result, message